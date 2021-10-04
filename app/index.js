import App from 'app';

document.querySelector('[name=signin]').addEventListener('click',async  () => {
  const message = document.querySelector('.message');

  message.innerHTML = 'Logging in...';

  try {
    const auth = await App.client.authenticate({
      strategy: 'local',
      email: document.querySelector('[name=username]').value,
      password: document.querySelector('[name=password]').value,
    });
  } catch(err) {
    message.innerHTML = err.toString();
  }
});
