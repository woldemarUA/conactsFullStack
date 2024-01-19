# Use the official PostgreSQL image as a parent image
FROM postgres:latest

# Set the working directory in the container
WORKDIR /docker-entrypoint-initdb.d

COPY init-db.sql /docker-entrypoint-initdb.d

