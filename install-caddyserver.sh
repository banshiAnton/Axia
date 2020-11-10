#bin/bash

# Install script for Caddy Server for production. Installs Golang and compiles from source. 

echo "\a\a This is an install script for AXIA Search. It will install various dependencies, golang, and finally caddy to /usr/local/bin. It will use the Caddyfile in this folder.\n"
# Install Deps

echo "Install Dependencies\n"
apt update && apt install -y software-properties-common curl wget git sudo nano make cmake build-essential nodejs npm 

# Install Golang 
echo "Install Golang\n"

wget -q -O - https://git.io/vQhTU | bash
source .bashrc

# Get XCaddy and build Caddy
echo "Get XCaddy and build Caddy\n"

cd /home && git clone https://github.com/caddyserver/xcaddy
cd xcaddy/cmd/xcaddy && go build 
./xcaddy build && mv caddy /usr/local/bin

echo "All done!\n Don't forget to edit the Caddyfile and use the command 'start caddy' in the same folder"


