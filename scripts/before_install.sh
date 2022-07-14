#!/bin/bash
cd /home/ec2-user/server
curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
yum -y install nodejs npm
echo "Completed NODEJS Installation"
npm install --global yarn
echo "Completed YARN Installation"