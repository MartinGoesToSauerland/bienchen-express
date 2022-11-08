#!/bin/bash

RESET=`tput sgr0`
declare -A sel
sel[1]='/bienchen.sejka-friends.de/frontend/' # FE
sel[2]='/public_html/production/frontend/app/' # PRODUCTION

printf "\n\n"
echo -e "\033[1mHello.${RESET}"
#scp  -r ./* ssh-w019db1d@w019db1d.kasserver.com:/www/htdocs/w019db1d/bienchen.sejka-friends.de/backend/

#ssh ssh-w019db1d@w019db1d.kasserver.com << EOF
#    cd /www/htdocs/w019db1d/bienchen.sejka-friends.de/backend
#    pwd
#    ls
#EOF
#npm i
    #node index.js