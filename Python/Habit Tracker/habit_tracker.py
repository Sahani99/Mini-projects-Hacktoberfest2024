import json
from datetime import datetime

# File to store habits
HABIT_FILE = 'habits.json'

def load_habits():
    try:
        with open(HABIT_FILE, 'r') as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return {}

def save_habits(habits):
    with open(HABIT_FILE, 'w') as f:
        json.dump(habits, f)

def add_habit(habits):
    habit = input("Enter the habit you want to track: ")
    habits[habit] = {"completed": []}
    save_habits(habits)
    print(f'Habit "{habit}" added!')

def log_habit(habits):
    habit = input("Enter the habit you want to log: ")
    if habit in habits:
        today = datetime.now().date().isoformat()
        habits[habit]["completed"].append(today)
        save_habits(habits)
        print(f'Habit "{habit}" logged for today!')
    else:
        print("Habit not found!")

def view_progress(habits):
    for habit, data in habits.items():
        total_days = len(data["completed"])
        print(f'Habit: {habit}, Completed Days: {total_days}, Dates: {", ".join(data["completed"])}')

def main():
    habits = load_habits()

    while True:
        print("\nHabit Tracker")
        print("1. Add Habit")
        print("2. Log Habit")
        print("3. View Progress")
        print("4. Exit")
        
        choice = input("Choose an option: ")

        if choice == '1':
            add_habit(habits)
        elif choice == '2':
            log_habit(habits)
        elif choice == '3':
            view_progress(habits)
        elif choice == '4':
            print("Goodbye!")
            break
        else:
            print("Invalid option! Please try again.")

if __name__ == "__main__":
    main()
