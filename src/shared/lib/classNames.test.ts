import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('SomeClass')).toBe('SomeClass');
  });
  test('with additional class', () => {
    expect(classNames('someClass', {}, ['class1', 'class2', 'class3'])).toBe(
      'someClass class1 class2 class3',
    );
  });
  test('with mods', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
        'class3',
      ]),
    ).toBe('someClass class1 class2 class3 hovered scrollable');
  });
  test('with mods', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: false }, [
        'class1',
        'class2',
        'class3',
      ]),
    ).toBe('someClass class1 class2 class3 hovered');
  });
  test('with mods', () => {
    expect(
      classNames('someClass', { hovered: true, scrollable: undefined }, [
        'class1',
        'class2',
        'class3',
      ]),
    ).toBe('someClass class1 class2 class3 hovered');
  });
});
