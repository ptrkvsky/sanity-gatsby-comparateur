export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fa39ed7372db50118a2d14f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-comparateur-studio',
                  apiId: 'c94247ea-a928-4c6b-8c15-75a7e0f3aa97'
                },
                {
                  buildHookId: '5fa39ed7372db500bea2d4bc',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-comparateur',
                  apiId: 'aabee22d-9e55-4412-8aab-b3739e3364be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ptrkvsky/sanity-gatsby-comparateur',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-comparateur.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
