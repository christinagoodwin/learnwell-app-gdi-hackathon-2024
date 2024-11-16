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

### Install additional dependencies if not already included in requirements.txt:

- Django Rest Framework:

    `pip install djangorestframework`


- Python Dotenv (for loading environment variables from a .env file):

    `pip install python-dotenv`

- OpenAI Python Library:

    `pip install openai`

    - Verify the installation of the openai package:

        `pip show openai`

        *Example output:*

        ```
        Name: openai
        Version: 1.54.4
        Summary: The official Python library for the openai API
        Home-page: https://github.com/openai/openai-python
        Author-email: OpenAI <support@openai.com>
        Location: /path/to/site-packages
        Requires: anyio, distro, httpx, jiter, pydantic, sniffio, tqdm, typing-extensions```
## Configure Environment Variables
1. Create a .env file in the root directory of the project (where manage.py is located).

2. Add the following line to your .env file:

    `OPENAI_API_KEY=your-api-key-here`

3. Secure your .env file: Add .env to .gitignore (if not already included) to ensure sensitive information is not tracked by git or uploaded to GitHub.

4. If you do not have an OpenAI API key:

- Go to [OpenAI API Overview](https://platform.openai.com/docs/overview).
- Log in or create an account.
- Click your name in the top-right corner, then select **Your Profile**.
- In the left menu, click **API Keys**, and then **+ Create new secret key**.
- Save the key immediately, as it won't be accessible again.
- Copy the key and place it in your .env file under OPENAI_API_KEY.


## Set up the database
Run the following command to migrate the database schema:

`python manage.py migrate`

## Start the development server
To run the backend server, use the following command:

`python manage.py runserver`

This will start the Django development server on http://127.0.0.1:8000/.