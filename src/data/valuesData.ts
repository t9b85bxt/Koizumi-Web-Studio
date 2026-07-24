import { FileSearch, Sparkles, Target, UserCheck, type LucideIcon } from 'lucide-react'

export const VALUES: { title: string; desc: string; shortDesc: string; icon: LucideIcon }[] = [
  {
    title: '契約前に、実際のデモサイトで確認できる',
    desc: 'お話を伺ったうえで、契約前に実際に動くデモサイトをお作りします。イメージと違った、というミスマッチを防げます。',
    shortDesc: 'イメージと違った、というミスマッチを防げます。',
    icon: FileSearch,
  },
  {
    title: '規模を問わず、小さなご相談も歓迎',
    desc: '個人事業主さまの1ページサイトから、複数ページの本格的なサイトまで、規模を問わずご相談いただけます。',
    shortDesc: '1ページのサイトから、本格的な複数ページまで。',
    icon: Sparkles,
  },
  {
    title: '見た目の美しさはもちろん、成果につながる設計まで',
    desc: 'デザインの美しさに加えて、問い合わせ・予約・来店につながる導線までしっかり設計します。',
    shortDesc: '見た目の美しさに加え、問い合わせにつながる導線まで設計します。',
    icon: Target,
  },
  {
    title: '最初から最後まで、担当は私ひとり',
    desc: '打ち合わせから制作、納品後のご相談まで、間に他の担当者を挟みません。伝えたいことがそのまま伝わります。',
    shortDesc: '打ち合わせから納品後まで、間に他の担当者を挟みません。',
    icon: UserCheck,
  },
]
