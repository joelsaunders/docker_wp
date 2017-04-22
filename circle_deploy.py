import argparse
import os
import requests

# get a circle_ci token
creds_file = 'circle_creds.json'
if not os.path.exists(creds_file):
    token = None
    while not token:
        token = raw_input('you need a circleci token from:\nhttps://circleci.com/account/api\n\nenter circleci token:\n')
    creds = {'circle-token': token}
    with open(creds_file, 'w') as c:
        json.dump(creds, c)
with open(creds_file, 'r') as c:
    creds = json.load(c)

headers = {'Content-Type': 'application/json'}
parser = argparse.ArgumentParser()
parser.add_argument('branch', help="the git branch to deploy e.g. development")
args = parser.parse_args()
branch = args.branch

print 'Deploying %s branch.' % (branch.upper())

payload = json.dumps({'build_parameters': {'DEPLOY': 'deploy'}})

request = requests.post(
    'https://circleci.com/api/v1.1/project/bitbucket/ueni/walker_app_2/tree/%s' % branch,
    params=creds,
    headers=headers,
    data=payload
)

print request.content

