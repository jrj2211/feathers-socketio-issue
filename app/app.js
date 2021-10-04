import feathers from '@feathersjs/client';
import io from 'socket.io-client';
import auth from '@feathersjs/authentication-client';

const app = feathers();
app.io = io();

app.configure(feathers.socketio(app.io));
app.configure(feathers.authentication());

export default {
  client: app,
}
