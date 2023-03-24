import Button from '../button';

test('Рендер кнопки', () => {
  const btn = new Button();
  expect(btn).toEqual(new Button());
});
