import type { PropertyProps } from '~/components';

export const properties: Record<string, PropertyProps> = {
  TInput: {
    modifier: 'extends',
    type: {
      type: 'function',
      params: [
        {
          spread: true,
          name: 'args',
          type: {
            type: 'array',
            item: 'any',
          },
        },
      ],
      return: 'unknown',
    },
  },
  TSchema: {
    modifier: 'extends',
    type: {
      type: 'union',
      options: [
        {
          type: 'custom',
          name: 'LooseTupleSchema',
          href: '../LooseTupleSchema/',
          generics: [
            {
              type: 'custom',
              name: 'TupleItems',
              href: '../TupleItems/',
            },
            {
              type: 'union',
              options: [
                {
                  type: 'custom',
                  name: 'ErrorMessage',
                  href: '../ErrorMessage/',
                  generics: [
                    {
                      type: 'custom',
                      name: 'LooseTupleIssue',
                      href: '../LooseTupleIssue/',
                    },
                  ],
                },
                'undefined',
              ],
            },
          ],
        },
        {
          type: 'custom',
          name: 'StrictTupleSchema',
          href: '../StrictTupleSchema/',
          generics: [
            {
              type: 'custom',
              name: 'TupleItems',
              href: '../TupleItems/',
            },
            {
              type: 'union',
              options: [
                {
                  type: 'custom',
                  name: 'ErrorMessage',
                  href: '../ErrorMessage/',
                  generics: [
                    {
                      type: 'custom',
                      name: 'StrictTupleIssue',
                      href: '../StrictTupleIssue/',
                    },
                  ],
                },
                'undefined',
              ],
            },
          ],
        },
        {
          type: 'custom',
          name: 'TupleSchema',
          href: '../TupleSchema/',
          generics: [
            {
              type: 'custom',
              name: 'TupleItems',
              href: '../TupleItems/',
            },
            {
              type: 'union',
              options: [
                {
                  type: 'custom',
                  name: 'ErrorMessage',
                  href: '../ErrorMessage/',
                  generics: [
                    {
                      type: 'custom',
                      name: 'TupleIssue',
                      href: '../TupleIssue/',
                    },
                  ],
                },
                'undefined',
              ],
            },
          ],
        },
        {
          type: 'custom',
          name: 'TupleWithRestSchema',
          href: '../TupleWithRestSchema/',
          generics: [
            {
              type: 'custom',
              name: 'TupleItems',
              href: '../TupleItems/',
            },
            {
              type: 'custom',
              name: 'BaseSchema',
              href: '../BaseSchema/',
              generics: [
                'unknown',
                'unknown',
                {
                  type: 'custom',
                  name: 'BaseIssue',
                  href: '../BaseIssue/',
                  generics: ['unknown'],
                },
              ],
            },
            {
              type: 'union',
              options: [
                {
                  type: 'custom',
                  name: 'ErrorMessage',
                  href: '../ErrorMessage/',
                  generics: [
                    {
                      type: 'custom',
                      name: 'TupleWithRestIssue',
                      href: '../TupleWithRestIssue/',
                    },
                  ],
                },
                'undefined',
              ],
            },
          ],
        },
      ],
    },
  },
  schema: {
    type: {
      type: 'custom',
      name: 'TSchema',
    },
  },
  Action: {
    type: {
      type: 'custom',
      name: 'ArgsAction',
      href: '../ArgsAction/',
      generics: [
        {
          type: 'custom',
          name: 'TInput',
        },
        {
          type: 'custom',
          name: 'TSchema',
        },
      ],
    },
  },
};
