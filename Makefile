start-server-app:
	cd ./public && python3 -m http.server 8000

start-server-storybook:
	cd ./public/storybook && python3 -m http.server 8001
