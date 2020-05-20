import * as fromSignUp from './sign-up.actions';

describe('loadSignUps', () => {
  it('should return an action', () => {
    expect(fromSignUp.loadSignUps().type).toBe('[SignUp] Load SignUps');
  });
});
