import OkotokiAPI from 'okotoki';

const api = new OkotokiAPI({
  key: 'DEMO_API_KEY',
  secret: 'DEMO_API_SECRET',
});

api.onMessage = (message: any) => {
  console.log(message);
};

console.log('Okotoki API client initialized.');
