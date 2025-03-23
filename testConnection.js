name: Test Database Connection

on:
  push:
    branches:
      - main  # You can replace this with your target branch

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Test database connection
        run: node testConnection.js
        env:
          DB_PASSWORD: ${{ secrets.DB_PASSWORD }}  # Set your database password as a secret in GitHub
          DB_USER: ${{ secrets.DB_USER }}  # If needed, you can also add other secrets like DB_USER
          DB_HOST: ${{ secrets.DB_HOST }}  # Set the host in GitHub secrets
          DB_NAME: ${{ secrets.DB_NAME }}  # Set the database name in GitHub secrets
