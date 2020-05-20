import * as fromSignUp from '../reducers/sign-up.reducer';
import { selectSignUpState } from './sign-up.selectors';

describe('SignUp Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSignUpState({
      [fromSignUp.signUpFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
