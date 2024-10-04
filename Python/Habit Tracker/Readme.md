# Habit Tracker

A simple Habit Tracker implemented in Python to help you monitor and maintain your daily habits. This project allows users to add habits, log their progress, and view their achievements over time.

## Features

- **Add Habit**: Easily add new habits you want to track.
- **Log Habit**: Record your progress by logging the completion of habits for each day.
- **View Progress**: Check your progress with the number of days completed and the specific dates.
- **Data Persistence**: All habits and logs are stored in a JSON file for long-term tracking.

## Requirements

- Python 3.x
- No external libraries are required for this basic version.

## Getting Started

1. **Clone the repository** (or download the source code):
   ```bash
   git clone <https://github.com/vidhvath28/Mini-projects-Hacktoberfest2024.git>
   cd habit-tracker
   ```

2. **Run the script**:
   ```bash
   python habit_tracker.py
   ```

## Usage

1. Choose an option from the menu:
   - **Add Habit**: Input a new habit you want to track.
   - **Log Habit**: Log the completion of a habit for the current day.
   - **View Progress**: See your progress on each habit and how many days you've completed.
   - **Exit**: Close the program.

## Example

```plaintext
Habit Tracker
1. Add Habit
2. Log Habit
3. View Progress
4. Exit
Choose an option: 1
Enter the habit you want to track: Read 20 pages a day
Habit "Read 20 pages a day" added!
```

## File Structure

```
habit-tracker/
│
├── habit_tracker.py     # The main script for the Habit Tracker
└── README.md            # Documentation for the project
```

