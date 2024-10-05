import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class TodoApp {
    private static final String FILE_NAME = "todo_list.dat";
    private static List<TodoItem> tasks = new ArrayList<>();
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        loadTasks();

        while (true) {
            System.out.println("\nTodo List Application");
            System.out.println("1. Add Task");
            System.out.println("2. Remove Task");
            System.out.println("3. Mark Task Completed");
            System.out.println("4. View Tasks");
            System.out.println("5. Exit");
            System.out.print("Choose an option: ");

            int choice = scanner.nextInt();
            scanner.nextLine();  // Clear the newline

            switch (choice) {
                case 1:
                    System.out.print("Enter task: ");
                    String task = scanner.nextLine();
                    addTask(task);
                    break;
                case 2:
                    System.out.print("Enter task number to remove: ");
                    int removeIndex = scanner.nextInt() - 1;
                    removeTask(removeIndex);
                    break;
                case 3:
                    System.out.print("Enter task number to mark completed: ");
                    int completeIndex = scanner.nextInt() - 1;
                    markTaskCompleted(completeIndex);
                    break;
                case 4:
                    viewTasks();
                    break;
                case 5:
                    System.out.println("Exiting...");
                    saveTasks();
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid option. Please try again.");
            }
        }
    }

    private static void addTask(String task) {
        tasks.add(new TodoItem(task));
        saveTasks();
    }

    private static void removeTask(int index) {
        if (index >= 0 && index < tasks.size()) {
            tasks.remove(index);
            saveTasks();
        } else {
            System.out.println("Invalid task number.");
        }
    }

    private static void markTaskCompleted(int index) {
        if (index >= 0 && index < tasks.size()) {
            tasks.get(index).markCompleted();
            saveTasks();
        } else {
            System.out.println("Invalid task number.");
        }
    }

    private static void viewTasks() {
        System.out.println("Tasks:");
        for (int i = 0; i < tasks.size(); i++) {
            System.out.println((i + 1) + ". " + tasks.get(i));
        }
    }

    private static void saveTasks() {
        try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(FILE_NAME))) {
            oos.writeObject(tasks);
        } catch (IOException e) {
            System.out.println("Error saving tasks: " + e.getMessage());
        }
    }

    @SuppressWarnings("unchecked")
    private static void loadTasks() {
        try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(FILE_NAME))) {
            tasks = (List<TodoItem>) ois.readObject();
        } catch (IOException | ClassNotFoundException e) {
            tasks = new ArrayList<>();
        }
    }

    static class TodoItem implements Serializable {
        private String task;
        private boolean completed;

        public TodoItem(String task) {
            this.task = task;
            this.completed = false;
        }

        public boolean isCompleted() {
            return completed;
        }

        public void markCompleted() {
            this.completed = true;
        }

        @Override
        public String toString() {
            return (completed ? "[X] " : "[ ] ") + task;
        }
    }
}
