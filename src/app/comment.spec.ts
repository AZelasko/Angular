import { Comment } from './comment';

describe('Comment', () => {
  it('should create an instance', () => {
    expect(new Comment('ala', 'ma')).toBeTruthy();
  });
});
