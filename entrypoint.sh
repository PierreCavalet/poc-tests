npm start &

# wait for the server to be ready
while ! curl -f -s -o /dev/null "http://localhost:3000/"
do
    echo "Still trying to connect to http://localhost:3000/"
    sleep 1
done

npm run unit
npm run e2e
npm run browserstack