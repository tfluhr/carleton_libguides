import pprint
import requests, datetime

# get access token
def get_access_token():
    payload = {'client_id': '1718',  ### this is Carleton's SpringShare Suite ID
               'grant_type': 'client_credentials',
               'client_secret': '9286f3d7bc70e56652dfe0404dac4f36'  ### this is the read only api secret
               }
    response = requests.post('https://carleton.libcal.com/api/1.1/oauth/token', data=payload)
    access_token = (response.json()['access_token'])
    return(access_token)


access_token = get_access_token()
headers = {"Authorization": f"Bearer {access_token}"}

### Check if library is open
def check_open():
    today = datetime.date.today().strftime('%Y-%m-%d')
    response = requests.get('https://carleton.libcal.com/api/1.1/hours/10242',headers=headers)
    data = response.json()
    status = (data[0]['dates'][today]['status'])
    return status



## parse JSON to get room availability
def get_availability():
    response = requests.get('https://carleton.libcal.com/api/1.1/space/utilization/6351?category_id=46332', headers=headers)
    data = response.json()
    #pprint.pprint(data)
    room_list = []
    for i in (data['zones'][0]['spaces']):
        if i['currentOccupancy'] == 0:
            room_avail = (i['name'] + ' is currently available')
            room_list.append(room_avail)
        else:
            room_avail = (i['name'] + ' is reserved')
            room_list.append(room_avail)
    return(room_list)

# create function to get next available reservation time
# in case everything currently booked
# def next_avail():
   

status = check_open()
if status == 'open':
    availability = get_availability()
    # move get_availability() here
    for i in availability:
        print(i)
    print("to view full availability, click here")
else:
    print("The library is currently closed.\nNext available reservation:\nGroup Study Room 1 @ {data from next_avail} }\nClick Here to make a future reservation! ")


