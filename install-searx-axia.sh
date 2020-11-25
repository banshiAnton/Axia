#/bin/bash
echo "Follow the prompts \n"
cd /home
git clone https://github.com/djdynam/Axia axia
chmod -R 777 axia 
cd axia
bash utils/searx.sh install all
