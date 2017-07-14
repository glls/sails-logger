import json, requests, random, string, datetime, time
from random import randint
from random_words import RandomWords

url = 'http://localhost:1337/log/create'
# url = 'http://81.171.11.179:1337/log/create'


action_words = ['PUT', 'GET', 'POST', 'DELETE', 'UPDATE']
component_words = ['Common API', 'Users API', 'Sensorial', 'PA Android v0.4', 'Graph', 'TEST']
rw = RandomWords()

headers = {'Content-type': 'application/json',
           'Accept': 'application/json'}

start = time.time()

for i in range(0, 100):
    log = {
        "message": rw.random_word('m'),
        "session": "5950eed348d4167818c36a"+str(i),
        "component": random.choice(component_words),
        "method": random.choice(action_words),
        "level": randint(1, 5),
        "location": "/random/" + str(i),
        "data": rw.random_word('d'),
    }

    data = json.dumps(log)
    r = requests.post(url, data=data, headers=headers)
    print (r.text)

print ('It took', time.time()-start, 'seconds.')
# It took 30.3469998837 seconds. (3000 posts)
# It took 51.0289998055 seconds. (5000 posts)

# It took 431.299000025 seconds. (1000 posts on atos server)
# It took ~81 seconds. (200 posts on atos server)
# Takes ~43 seconds avg for 100 posts on atos server
