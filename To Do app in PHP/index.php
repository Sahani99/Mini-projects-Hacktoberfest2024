<?php
// Initialize the tasks array from the cookie
$tasks = isset($_COOKIE['tasks']) ? json_decode($_COOKIE['tasks'], true) : [];

// Handle Add Task
if (isset($_POST['add_task'])) {
    $new_task = htmlspecialchars($_POST['task']);
    if (!empty($new_task)) {
        $tasks[] = $new_task;
        setcookie('tasks', json_encode($tasks), time() + (86400 * 30), "/"); // Set the cookie
    }
}

// Handle Update Task
if (isset($_POST['update_task'])) {
    $index = $_POST['task_index'];
    $updated_task = htmlspecialchars($_POST['updated_task']);
    if (!empty($updated_task)) {
        $tasks[$index] = $updated_task;
        setcookie('tasks', json_encode($tasks), time() + (86400 * 30), "/");
    }
}

// Handle Delete Task
if (isset($_POST['delete_task'])) {
    $index = $_POST['task_index'];
    array_splice($tasks, $index, 1); // Remove the task from the array
    setcookie('tasks', json_encode($tasks), time() + (86400 * 30), "/");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>To-Do List</h1>

        <form method="POST" class="task-form">
            <input type="text" name="task" placeholder="Enter a new task" required>
            <button type="submit" name="add_task">Add Task</button>
        </form>

        <ul class="task-list">
            <?php foreach ($tasks as $index => $task): ?>
                <li>
                    <form method="POST" class="task-update-form">
                        <input type="hidden" name="task_index" value="<?php echo $index; ?>">
                        <input type="text" name="updated_task" value="<?php echo $task; ?>" required>
                        <button type="submit" name="update_task">Update</button>
                        <button type="submit" name="delete_task">Delete</button>
                    </form>
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</body>
</html>
