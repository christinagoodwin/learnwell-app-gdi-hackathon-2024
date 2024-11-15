# Set up the backend environment

## Install dependencies
- Navigate to the backend directory:

    `cd learnwell-app-gdi-hackathon-2024/backend`

- Create a virtual environment:

    `python3 -m venv .venv`

- Activate the virtual environment:
    - On macOS/Linux:
    `source .venv/bin/activate`

    - On Windows:
    `.venv\Scripts\activate`

- Install the required Python packages:

    `pip install -r requirements.txt`

## Set up the database
Run the following command to migrate the database schema:

`python manage.py migrate`

## Start the development server
To run the backend server, use the following command:

`python manage.py runserver`

This will start the Django development server on http://127.0.0.1:8000/.