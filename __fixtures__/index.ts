import Accordion from 'app/components/Accordion';

export default [
  {
    component: Accordion,
    name: 'Accordion',
    props: {
      onClick: (value: string) => console.log(value),
      items: [
        {
          title: '関東',
          subitems: [
            { value: 1, text: '東京都' },
            { value: 2, text: '神奈川県' },
            { value: 3, text: '千葉県' }
          ]
        },
        {
          title: '東北',
          subitems: [
            { value: 1, text: '青森県' },
            { value: 2, text: '秋田県' },
            { value: 3, text: '岩手県' }
          ]
        }
      ]
    }
  }
];
