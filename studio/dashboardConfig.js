export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f44641877c0ad9950d43532',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-org2cdoc',
                  apiId: '70365982-383f-4580-9def-a4229c43e667'
                },
                {
                  buildHookId: '5f44641877c0ad7f12d434ae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1hwptc1c',
                  apiId: 'c6890fa1-2069-4df2-8396-7ca62d126eef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neekey/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1hwptc1c.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
