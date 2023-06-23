import { IsEvenPipe } from './isEvenPipe';

describe('IsEvenPipe', () => {
  let pipe: IsEvenPipe;

  beforeEach(() => {
    pipe = new IsEvenPipe();
  });

  it('should transform even number to "male"', () => {
    const result = pipe.transform(4);
    expect(result).toEqual('male');
  });

  it('should transform odd number to "female"', () => {
    const result = pipe.transform(3);
    expect(result).toEqual('female');
  });
});
