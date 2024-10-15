import { redirect } from 'react-router-dom';

export function loginAction() {
  console.log('This is the loginAction.');

  return redirect('/');
}
