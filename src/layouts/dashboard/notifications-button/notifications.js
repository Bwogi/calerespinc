import { subDays, subHours } from 'date-fns';

const now = new Date();

export const notifications = [
  {
    id: '5e8883f1b51cc1956a5a1ec0',
    author: 'Bwogi',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subHours(now, 2).getTime(),
    job: 'ATMI-TTNU5942740',
    read: true,
    type: 'job_add',
  },
  {
    id: 'bfb21a370c017acc416757c7',
    author: 'Bwogi',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    createdAt: subHours(now, 2).getTime(),
    job: 'OVFR-YMMU6765678',
    read: false,
    type: 'job_add',
  },
  {
    id: '20d9df4f23fff19668d7031c',
    createdAt: subDays(now, 1).getTime(),
    description: 'Shift Registration is now available',
    read: true,
    type: 'new_feature',
  },
  {
    id: '5e8883fca0e8612044248ecf',
    author: 'Bwogi',
    avatar: '/assets/avatars/avatar-jie-yan-song.png',
    company: 'spot 201, North Fence.',
    createdAt: subHours(now, 2).getTime(),
    read: false,
    type: 'company_created',
  },
];
