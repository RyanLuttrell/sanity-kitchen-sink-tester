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
                  buildHookId: '604a2aaa8b10850085eef545',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-tester-studio',
                  apiId: 'e0b2163a-7b7c-4a09-80e4-f92582592b41'
                },
                {
                  buildHookId: '604a2aaa85e99b00d08f516f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-tester',
                  apiId: '72fb1222-e253-4531-a6a9-32df9bb05855'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/RyanLuttrell/sanity-kitchen-sink-tester',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-tester.netlify.app', category: 'apps'}
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
