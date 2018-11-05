import './style.sass';
import eventActions from './components/flux/EventActions';
import eventStore from './components/flux/EventStore';

(function() {
    fetch('https://shri-homework-4.herokuapp.com/api/events?limit=11')
        .then(res => {
            return res.json();
        })
        .then((data) => {
            eventActions.loadEvent(data);
        })
        .catch(err => console.log(err));
})();
