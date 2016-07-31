import $ from 'jquery';
import NewListActions from '../actions/NewListActions';
import NewListStore from '../stores/NewListStore';
import ListActions from '../actions/ListActions';

export function createList() {
  NewListActions.creationStarted();

  const { title } = NewListStore.getState();

  $.ajax({
    method: 'POST',
    url: '/api/lists',
    data: { title },
    dataType: 'json',
    success: function (response) {
      NewListActions.creationSucceeded();
      ListActions.listCreated(response.list);
      NewListActions.creationCompleted();
    },
    error: function (response) {
      NewListActions.creationFailed(response.errors);
      NewListActions.creationCompleted();
    },
  });
}
