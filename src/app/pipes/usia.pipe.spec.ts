import { UsiaPipe } from './usia.pipe';

describe('UsiaPipe', () => {
  let pipe: UsiaPipe;

  beforeEach(() => {
    pipe = new UsiaPipe();
  });

  it('create an instance', () => {
    const pipe = new UsiaPipe();
    expect(pipe).toBeTruthy();
  });

  it('should calculate age correctly', () => {
    const today = new Date();
    const birthDate = new Date(
      today.getFullYear() - 20,
      today.getMonth(),
      today.getDate()
    );

    expect(pipe.transform(birthDate.toISOString())).toEqual(
      '20 years, 0 months, 0 days'
    );
  });
});
