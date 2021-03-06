import * as React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from 'docs/src/modules/components/Link';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import BrandingCard from 'docs/src/modules/branding/BrandingCard';
import UnderlinedText from 'docs/src/modules/branding/UnderlinedText';
import FeedbackIcon from 'docs/src/modules/branding/icons/Feedback';
import ChangesIcon from 'docs/src/modules/branding/icons/Changes';
import FinanceIcon from 'docs/src/modules/branding/icons/Finance';
import HelpIcon from 'docs/src/modules/branding/icons/Help';
import OpenCollectiveIcon from 'docs/src/modules/branding/icons/OpenCollective';
import BrandingRoot from 'docs/src/modules/branding/BrandingRoot';
import BrandingBeginToday from 'docs/src/modules/branding/BrandingBeginToday';
import BrandingDiscoverMore from 'docs/src/modules/branding/BrandingDiscoverMore';
import BrandingPersona from 'docs/src/modules/branding/BrandingPersona';

function BrandingTeam() {
  return (
    <Box sx={{ bgcolor: 'greyF3', pt: 15, pb: 10 }}>
      <Container sx={{ position: 'relative' }}>
        <Box
          component="img"
          src="/static/branding/block4.svg"
          alt=""
          loading="lazy"
          sx={{
            width: 207,
            height: 171,
            position: 'absolute',
            right: { xs: 10, md: 0 },
            bottom: -176,
          }}
        />
        <Typography variant="h2">Team</Typography>
        <Typography sx={{ mt: 1.5, mb: 7, maxWidth: 700 }}>
          Material-UI is maintained by a group of invaluable core contributors, with the massive
          support and involvement of the community.
        </Typography>
      </Container>
    </Box>
  );
}

const company = [
  {
    name: 'Olivier Tassinari',
    src: '/static/branding/about/olivier.jpg',
    title: 'Co-founder',
    location: 'Paris, France',
    twitter: 'olivtassinari',
    github: 'oliviertassinari',
  },
  {
    name: 'Matt Brookes',
    src: '/static/branding/about/matt.jpg',
    title: 'Co-founder',
    location: 'London, UK',
    twitter: 'randomtechdude',
    github: 'mbrookes',
  },
  {
    name: 'Sebastian Silbermann',
    src: '/static/branding/about/sebastian.jpg',
    title: 'Community focus',
    location: 'Dresden, Germany',
    twitter: 'sebsilbermann',
    github: 'eps1lon',
  },
  {
    name: 'Damien Tassone',
    src: '/static/branding/about/damien.jpg',
    title: 'Enterprise focus',
    location: 'Barcelona, Spain',
    twitter: 'madKakoO',
    github: 'dtassone',
  },
  {
    name: 'Marija Najdova',
    src: '/static/branding/about/marija.jpg',
    title: 'Community focus',
    location: 'Skopje, North Macedonia',
    twitter: 'marijanajdova',
    github: 'mnajdova',
  },
  {
    name: 'Danail Hadjiatanasov',
    src: '/static/branding/about/danail.jpg',
    title: 'Enterprise focus',
    location: 'Amsterdam, Netherlands',
    twitter: 'danail_h',
    github: 'DanailH',
  },
];

function BrandingCompany() {
  return (
    <Box sx={{ bgcolor: 'greyEA', pt: 12, pb: 11 }}>
      <Container sx={{ position: 'relative' }}>
        <Box
          component="img"
          src="/static/branding/block1-white.svg"
          loading="lazy"
          alt=""
          sx={{
            width: 293,
            height: 120,
            position: 'absolute',
            right: { xs: 20, md: 0 },
            bottom: -129,
          }}
        />
        <Typography variant="h3">
          <UnderlinedText>Company</UnderlinedText>
        </Typography>
        <Typography sx={{ mt: 1.5, mb: 7, maxWidth: 700 }}>
          The development of the project and its ecosystem is guided by an international team.
        </Typography>
        <Grid container spacing={4}>
          {company.map((member) => (
            <Grid item xs={12} md={6} lg={4} key={member.name}>
              <BrandingPersona {...member} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const community = [
  {
    name: 'Danica Shen',
    github: 'DDDDDanica',
    title: '🇨🇳 Chinese docs',
    location: 'Ireland',
    src: 'https://avatars.githubusercontent.com/u/12678455',
  },
  {
    name: 'Yan Lee',
    github: 'AGDholo',
    title: '🇨🇳 Chinese docs',
    location: 'China',
    src: 'https://avatars.githubusercontent.com/u/13300332',
  },
  {
    name: 'Jairon Alves Lima',
    github: 'jaironalves',
    title: '🇧🇷 Brazilian docs',
    location: 'São Paulo, Brazil',
    src: 'https://avatars.githubusercontent.com/u/29267813',
  },
] as typeof emeriti;

function BrandingContributors() {
  return (
    <Box sx={{ bgcolor: 'greyF3', pt: 10, pb: 9 }}>
      <Container sx={{ position: 'relative' }}>
        <Box
          component="img"
          src="/static/branding/block2.svg"
          loading="lazy"
          alt=""
          sx={{
            width: 196,
            height: 139,
            position: 'absolute',
            right: { xs: 30, md: 0 },
            bottom: -131,
          }}
        />
        <Typography variant="h3">
          Community <UnderlinedText>Contributors</UnderlinedText>
        </Typography>
        <Typography sx={{ mt: 1.5, mb: 7, maxWidth: 700 }}>
          Some members of the community have so enriched it, that they deserve special mention.
        </Typography>
        <Grid container spacing={4}>
          {community.map((member) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={member.name}>
              <BrandingPersona
                {...member}
                src={`${member.src}?s=120`}
                srcSet={`${member.src}?s=240 2x`}
                size="small"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const emeriti = [
  {
    name: 'Hai Nguyen',
    github: 'hai-cea',
    twitter: 'haicea',
    title: 'v0.x creator',
    location: 'Dallas, Texas, US',
    src: 'https://avatars.githubusercontent.com/u/2007468',
  },
  {
    name: 'Nathan Marks',
    github: 'nathanmarks',
    title: 'v1.x co-creator',
    location: 'Toronto, ON',
    src: 'https://avatars.githubusercontent.com/u/4420103',
  },
  {
    name: 'Kevin Ross',
    github: 'rosskevin',
    twitter: 'rosskevin',
    title: 'Core focus, flow',
    location: 'Franklin, Tennessee, US',
    src: 'https://avatars.githubusercontent.com/u/136564',
  },
  {
    name: 'Sebastian Sebald',
    github: 'sebald',
    twitter: 'sebastiansebald',
    title: 'Core focus',
    location: 'Freiburg, Germany',
    src: 'https://avatars.githubusercontent.com/u/985701',
  },
  {
    name: 'Ken Gregory',
    github: 'kgregory',
    title: 'Core focus',
    location: 'New Jersey, US',
    src: 'https://avatars.githubusercontent.com/u/3155127',
  },
  {
    name: 'Tom Crockett',
    github: 'pelotom',
    twitter: 'pelotom',
    title: 'Core focus',
    location: 'Los Angeles, California, US',
    src: 'https://avatars.githubusercontent.com/u/128019',
  },
  {
    name: 'Maik Marschner',
    github: 'leMaik',
    twitter: 'leMaikOfficial',
    title: 'Core focus',
    location: 'Hannover, Germany',
    src: 'https://avatars.githubusercontent.com/u/5544859',
  },
  {
    name: 'Oleg Slobodskoi',
    github: 'kof',
    twitter: 'oleg008',
    title: 'JSS',
    location: 'Berlin, Germany',
    src: 'https://avatars.githubusercontent.com/u/52824',
  },
  {
    name: 'Dmitriy Kovalenko',
    github: 'dmtrKovalenko',
    twitter: 'dmtrKovalenko',
    title: 'Date pickers',
    location: 'Kharkiv, Ukraine',
    src: 'https://avatars.githubusercontent.com/u/16926049',
  },
  {
    name: 'Josh Wooding',
    github: 'joshwooding',
    twitter: 'JoshWooding_',
    title: 'Core focus, J.P. Morgan',
    location: 'London, UK',
    src: 'https://avatars.githubusercontent.com/u/12938082',
  },
];

function BrandingEmeriti() {
  return (
    <Box sx={{ bgcolor: 'greyEA', pt: 10, pb: 9 }}>
      <Container>
        <Typography variant="h3">
          Community <UnderlinedText>Emeriti</UnderlinedText>
        </Typography>
        <Typography sx={{ mt: 1.5, mb: 7, maxWidth: 700 }}>
          We honor some no-longer-active core team members who have made valuable contributons in
          the past. They advise us from time-to-time.
        </Typography>
        <Grid container spacing={4}>
          {emeriti.map((member) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={member.name}>
              <BrandingPersona
                {...member}
                src={`${member.src}?s=120`}
                srcSet={`${member.src}?s=240 2x`}
                size="small"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function BrandingJoinUs() {
  return (
    <Box
      sx={{
        bgcolor: 'secondary.main',
        color: 'secondary.contrastText',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src="/static/branding/block6.svg"
        loading="lazy"
        alt=""
        sx={{
          width: 570,
          height: 526,
          position: 'absolute',
          display: 'block',
          right: { xs: -360, sm: -350, lg: -300 },
          bottom: { xs: -300, sm: -200, lg: -80 },
        }}
      />
      <Container
        maxWidth="md"
        sx={{
          py: { xs: 17, sm: 19, md: 20 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Typography variant="h2" align="center">
          Join our team of creators &amp; innovators
        </Typography>
        <Typography align="center" sx={{ mt: 3, mb: 5 }}>
          If you love the challenge of doing things differently, empowering creativity, and making
          real connections along the way–then this may be the place for you.
        </Typography>
        <Button
          href="/company/jobs/"
          component={Link}
          noLinkStyle
          size="large"
          variant="contained"
          endIcon={<NavigateNextIcon />}
        >
          See Open Positions
        </Button>
      </Container>
    </Box>
  );
}

function BrandingSupportUs() {
  return (
    <Container sx={{ mt: [10, 18], mb: [12, 20] }}>
      <Typography variant="h2">
        Material-UI is awesome.
        <br />
        How can <UnderlinedText>I support the project?</UnderlinedText>
      </Typography>
      <Typography sx={{ mt: 2, mb: 9 }}>There are many ways to support Material-UI:</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <BrandingCard icon={<QuestionAnswerIcon fontSize="large" />} title="Spread the word">
            <Typography sx={{ mt: 2 }}>
              Evangelize Material-UI by linking to{' '}
              <Link href="https://material-ui.com">material-ui.com</Link> on your website, every
              backlink matters! Follow us on{' '}
              <Link href="https://twitter.com/MaterialUI">Twitter</Link>, retweet the important
              news. <Link href="https://github.com/mui-org/material-ui">Star us</Link> on GitHub
              ⭐️.{" Or share what you've built with Material-UI."}
            </Typography>
          </BrandingCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <BrandingCard
            color="info"
            icon={<FeedbackIcon fontSize="large" />}
            title="Give us feedback"
          >
            <Typography sx={{ mt: 2 }}>
              Tell us what we&apos;re doing well or where we can improve. Please upvote (
              <span role="img" aria-label="Thumbs up emoji">
                👍
              </span>
              ) the issues that you are the most interested in seeing solved.{' '}
              <Link href="https://github.com/mui-org/material-ui/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc">
                Give us feedback
              </Link>
            </Typography>
          </BrandingCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <BrandingCard
            color="info"
            icon={<ChangesIcon fontSize="large" />}
            title="Make changes happen"
            sx={{
              ul: {
                position: 'relative',
                ml: 0,
                pl: '1.3em',
              },
              'ul li:before': {
                content: '"-"',
                position: 'absolute',
                left: 0,
              },
            }}
          >
            <ul>
              <li>
                Edit the documentation. Every page has an &quot;EDIT THIS PAGE&quot; link in the top
                right.
              </li>
              <li>
                Report bugs or missing features by{' '}
                <Link href="https://github.com/mui-org/material-ui/issues">creating an issue</Link>.
              </li>
              <li>
                Review and comment on existing{' '}
                <Link href="https://github.com/mui-org/material-ui/pulls">pull requests</Link> and{' '}
                <Link href="https://github.com/mui-org/material-ui/issues">issues</Link>.
              </li>
              <li>
                Help <Link href="https://translate.material-ui.com/">translate</Link> the
                documentation.
              </li>
              <li>
                <Link href="https://github.com/mui-org/material-ui/tree/HEAD/docs">
                  Improve our documentation
                </Link>
                , fix bugs, or add features by{' '}
                <Link href="https://github.com/mui-org/material-ui/blob/HEAD/CONTRIBUTING.md#your-first-pull-request">
                  submitting a pull request
                </Link>
                .
              </li>
            </ul>
          </BrandingCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <BrandingCard icon={<FinanceIcon fontSize="large" />} title="Support us financially">
            <Typography sx={{ mt: 2 }}>
              If you use Material-UI in a commercial project and would like to support its continued
              development by becoming a Sponsor, or in a side or hobby project and would like to
              become a Backer, you can do so through OpenCollective.
            </Typography>
            <Typography sx={{ mt: 2, mb: 2 }}>
              All funds donated are managed transparently, and Sponsors receive recognition in the
              README and on the Material-UI home page.
            </Typography>
            <Button
              color="inherit"
              href="https://opencollective.com/material-ui"
              endIcon={<OpenCollectiveIcon />}
              variant="contained"
            >
              Open Collective
            </Button>
          </BrandingCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <BrandingCard icon={<HelpIcon fontSize="large" />} title="Help new users">
            <Typography sx={{ mt: 2 }}>
              You can answer questions on{' '}
              <Link href="https://stackoverflow.com/questions/tagged/material-ui">
                StackOverflow
              </Link>
              .
            </Typography>
          </BrandingCard>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Page() {
  return (
    <BrandingRoot>
      <BrandingTeam />
      <BrandingCompany />
      <BrandingContributors />
      <BrandingEmeriti />
      <BrandingJoinUs />
      <BrandingSupportUs />
      <BrandingDiscoverMore />
      <BrandingBeginToday />
    </BrandingRoot>
  );
}

// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
// import { experimentalStyled as styled } from '@material-ui/core/styles';
// import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
// import Quote from 'docs/src/modules/branding/Quote';
// import BulletItem from 'docs/src/modules/branding/BulletItem';
// import UnderlinedText from 'docs/src/modules/branding/UnderlinedText';
// import Persona from 'docs/src/modules/branding/Persona';
// import ArrowCirleIcon from 'docs/src/modules/branding/icons/ArrowCircle';

// const AboutUsRoot = styled(Box)<{}>(({ theme }) => ({
//   '& .MuiGrid-relative': {
//     position: 'relative',
//   },
//   '& .MuiGrid-bottomGutter': {
//     marginBottom: theme.spacing(10),
//   },
//   '& .MuiGrid-centered': {
//     width: '100%',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     [theme.breakpoints.up('lg')]: {
//       paddingLeft: theme.spacing(30),
//       paddingRight: theme.spacing(30),
//     },
//   },
//   '& .MuiGrid-centered-content': {
//     [theme.breakpoints.up('lg')]: {
//       paddingLeft: theme.spacing(25),
//       paddingRight: theme.spacing(25),
//     },
//   },
//   '& .MuiGrid-imageWrapper': {
//     width: '100%',
//   },
//   '& .MuiGrid-statistics': {
//     [theme.breakpoints.up('xs')]: {
//       marginTop: theme.spacing(4),
//       marginLeft: theme.spacing(2),
//     },
//     [theme.breakpoints.up('md')]: {
//       marginTop: theme.spacing(6),
//       marginLeft: theme.spacing(12),
//     },
//     width: 370,
//   },
//   '& .MuiGrid-panel': {
//     [theme.breakpoints.up('xs')]: {
//       '&.MuiGrid-panel': {
//         padding: `${theme.spacing(3)} ${theme.spacing(1)}`,
//       },
//     },
//     [theme.breakpoints.up('md')]: {
//       '&.MuiGrid-panel': {
//         padding: `${theme.spacing(10)} ${theme.spacing(12)}`,
//       },
//     },
//   },
//   '& .MuiGrid-panelSmallPadding': {
//     [theme.breakpoints.up('xs')]: {
//       '&.MuiGrid-panelSmallPadding': {
//         padding: `${theme.spacing(6)} ${theme.spacing(2)}`,
//       },
//     },
//     [theme.breakpoints.up('md')]: {
//       '&.MuiGrid-panelSmallPadding': {
//         padding: `${theme.spacing(5)} ${theme.spacing(6)}`,
//       },
//     },
//   },
//   '& .MuiGrid-panelInverted': {
//     backgroundColor: theme.palette.secondary.main,
//     color: 'white',
//   },
//   '& .MuiGrid-smallLeftSpacing': {
//     [theme.breakpoints.up('md')]: {
//       '&.MuiGrid-smallLeftSpacing': {
//         paddingLeft: theme.spacing(8),
//       },
//     },
//   },
//   '& .MuiGrid-team': {
//     background: theme.palette.greyF3,
//     [theme.breakpoints.up('xs')]: {
//       '&.MuiGrid-team': {
//         paddingBottom: theme.spacing(15),
//       },
//     },
//   },
//   '& .MuiGrid-company': {
//     background: theme.palette.greyEA,
//     padding: '100px',
//     [theme.breakpoints.up('xs')]: {
//       '&.MuiGrid-company': {
//         paddingBottom: theme.spacing(17),
//       },
//     },
//   },
//   '& .MuiGrid-contributors': {
//     background: theme.palette.greyF3,
//     padding: '100px',
//     [theme.breakpoints.up('xs')]: {
//       '&.MuiGrid-contributors': {
//         paddingBottom: theme.spacing(12),
//       },
//     },
//   },
//   '& .MuiGrid-emeriti': {
//     background: theme.palette.greyEA,
//     padding: '100px',
//   },
//   '& .MuiGrid-joinOurTeam': {
//     [theme.breakpoints.up('xs')]: {
//       padding: `${theme.spacing(10)} ${theme.spacing(5)}`,
//     },
//     [theme.breakpoints.up('md')]: {
//       padding: `${theme.spacing(20)} ${theme.spacing(15)}`,
//     },
//     [theme.breakpoints.up('lg')]: {
//       padding: `${theme.spacing(30)} ${theme.spacing(35)}`,
//     },
//     position: 'relative',
//     overflow: 'hidden',
//     '& [class*="MuiButton-root"]': {
//       background: 'white',
//       color: theme.palette.secondary.main,
//       '&:hover': {
//         background: '#D2D2D2',
//       },
//       '&:active': {
//         background: 'white',
//       },
//     },
//   },
//   '& .MuiGrid-supportCardsWrapper': {
//     [theme.breakpoints.up('lg')]: {
//       padding: theme.spacing(6),
//     },
//   },
//   '& .MuiGrid-ourValues': {
//     '&.MuiGrid-ourValues': {
//       paddingTop: theme.spacing(8),
//       paddingBottom: theme.spacing(8),
//       [theme.breakpoints.up('xs')]: {
//         '&.MuiGrid-ourValues': {
//           paddingLeft: theme.spacing(5),
//           paddingRight: theme.spacing(5),
//         },
//       },
//       [theme.breakpoints.up('md')]: {
//         '&.MuiGrid-ourValues': {
//           paddingLeft: theme.spacing(10),
//           paddingRight: theme.spacing(10),
//         },
//       },
//     },
//   },
//   '& .MuiGrid-panel-horizontalSpacing-xs': {
//     [theme.breakpoints.up('xs')]: {
//       '&.MuiGrid-panel-horizontalSpacing-xs': {
//         paddingLeft: theme.spacing(5),
//         paddingRight: theme.spacing(5),
//       },
//     },
//     [theme.breakpoints.up('md')]: {
//       '&.MuiGrid-panel-horizontalSpacing-xs': {
//         padding: `${theme.spacing(10)} ${theme.spacing(12)}`,
//       },
//     },
//   },
//   '& .MuiGrid-beginWithMUIToday': {
//     [theme.breakpoints.up('xs')]: {
//       padding: `${theme.spacing(10)} ${theme.spacing(5)} ${theme.spacing(15)} ${theme.spacing(5)}`,
//     },
//     [theme.breakpoints.up('md')]: {
//       padding: `${theme.spacing(20)} ${theme.spacing(15)}`,
//     },
//     [theme.breakpoints.up('lg')]: {
//       padding: `${theme.spacing(30)} ${theme.spacing(35)}`,
//     },
//     overflow: 'hidden',
//   },
//   '& .MuiGrid-personasContainer': {
//     '& > *': {
//       marginTop: theme.spacing(1),
//     },
//   },
//   '& .MuiGrid-discoverMore': {
//     '& h2': {
//       [theme.breakpoints.up('lg')]: {
//         textAlign: 'left',
//       },
//     },
//   },
// }));

// function About() {
//   // export default function About() {
//   return (
//     <BrandingRoot>
//       <AboutUsRoot>
//         <Grid container className="MuiGrid-mission">
//           <Grid
//             container
//             className="MuiGrid-centered MuiGrid-bottomGutter"
//             alignItems="center"
//             justifyContent="center"
//           >
//             <Grid item>
//               <Typography variant="h1" align="center">
//                 We&apos;re on a mission to make building UIs with{' '}
//                 <UnderlinedText>React</UnderlinedText> fun.
//               </Typography>
//             </Grid>
//             <Grid item className="MuiGrid-centered-content">
//               <Typography align="center">
//                 Material-UI started back in 2014 to unify{' '}
//                 <Link href="https://reactjs.org/">React</Link> and{' '}
//                 <Link href="https://material.io/design">Material Design</Link>.
//               </Typography>
//               <Typography align="center">
//                 Today, Material-UI has grown to become one of the world&apos;s most popular React
//                 libraries – used by a vibrant community of more than <b>2M developers</b> in over{' '}
//                 <b>180 countries</b>.
//               </Typography>
//             </Grid>
//           </Grid>

//           <Grid container spacing={1} className="MuiGrid-bottomGutter MuiGrid-relative">
//             <Grid item lg={6} xs={12} className="MuiGrid-relative">
//               <Box
//                 component="img"
//                 src="/static/branding/about/top-left.jpg"
//                 alt="Person working on computer"
//                 sx={{ width: '100%' }}
//               />
//               <Box
//                 component="img"
//                 src="/static/branding/block3.svg"
//                 alt=""
//                 sx={{
//                   width: { xs: 80, md: 120 },
//                   height: { xs: 80, md: 120 },
//                   position: 'absolute',
//                   display: { xs: 'block', lg: 'none' },
//                   left: '80%',
//                   top: { xs: 'calc(100% - 60px)', md: 'calc(100% - 80px)' },
//                 }}
//               />
//             </Grid>
//             <Grid item lg={6} xs={12}>
//               <Grid container direction="column">
//                 <Grid item className="MuiGrid-imageWrapper">
//                   <Box
//                     component="img"
//                     alt=""
//                     src="/static/branding/about/top-right.png"
//                     sx={{ width: '100%' }}
//                   />
//                 </Grid>
//                 <Grid item>
//                   <Grid container className="MuiGrid-statistics">
//                     <Grid item xs={6}>
//                       <Typography variant="h2">2019</Typography>
//                       <Typography>company founded</Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <Typography variant="h2">2K</Typography>
//                       <Typography>contributors</Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <Typography variant="h2">2m</Typography>
//                       <Typography>users</Typography>
//                     </Grid>
//                     <Grid item xs={6}>
//                       <Typography variant="h2">60k+</Typography>
//                       <Typography>github stars</Typography>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Box
//               component="img"
//               src="/static/branding/block3.svg"
//               alt=""
//               sx={{
//                 width: 120,
//                 height: 120,
//                 position: 'absolute',
//                 transform: (theme) => `translate(calc(-50% + ${theme.spacing(1)}), 0%)`,
//                 display: { xs: 'none', lg: 'block' },
//                 left: '50%',
//                 top: (theme) => `calc(100% - ${theme.spacing(10)})`,
//               }}
//             />
//           </Grid>
//         </Grid>

//         <Grid container spacing={1} className="MuiGrid-bottomGutter">
//           <Grid item lg={6} xs={12} className="MuiGrid-panel MuiGrid-panel-horizontalSpacing-xs">
//             <Grid container spacing={1}>
//               <Grid item>
//                 <Typography variant="h2">
//                   Our mission
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography>
//                   Our company is focused on making React UI development faster, simpler, and
//                   accessible to more people. We build open source and commercial tools used by over
//                   two millions developers in production.
//                 </Typography>
//                 <Typography>
//                   We&apos;re proud not only of the products we make, but also the community and
//                   partnerships we&apos;ve cultivated with other developers and companies.
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Button color="secondary" variant="contained" endIcon={<NavigateNextIcon />}>
//                   Join us
//                 </Button>
//               </Grid>
//             </Grid>
//           </Grid>
//           <Grid
//             item
//             lg={6}
//             xs={12}
//             className="MuiGrid-panel MuiGrid-panelInverted MuiGrid-ourValues MuiGrid-relative"
//           >
//             <Box
//               component="img"
//               src="/static/branding/block1-blue.svg"
//               alt=""
//               sx={{
//                 width: 290,
//                 height: 120,
//                 position: 'absolute',
//                 right: '10%',
//                 top: { xs: 'calc(100% - 60px)', md: 'calc(100% - 80px)' },
//               }}
//             />
//             <Typography variant="h2">
//               Our values
//             </Typography>
//             <BulletItem>Transparency, most of our work is public</BulletItem>
//             <BulletItem>Creating a safe, high-trust team</BulletItem>
//             <BulletItem>Building incredible developer experiences</BulletItem>
//             <BulletItem>Maintaining a healthy working environment</BulletItem>
//             <BulletItem>Deliver web experiences that feel amazing</BulletItem>
//           </Grid>
//         </Grid>

//         <Grid container className="MuiGrid-centered" alignItems="center">
//           <Grid item>
//             <Typography variant="h3" align="center">
//               <UnderlinedText>Our vision is</UnderlinedText> to provide material to build UIs. We
//               have an elegant React implementation of the Material Design guidelines that can be
//               customized to fully match your brand.
//             </Typography>
//           </Grid>
//         </Grid>

//         <Grid container spacing={1} alignItems="center">
//           <Grid item md={6} xs={12} className="MuiGrid-panel">
//             <Box
//               component="img"
//               alt="Dozen UI elements and blocks"
//               src="/static/branding/about/vision.png"
//               sx={{ width: '100%' }}
//             />
//           </Grid>
//           <Grid item md={6} xs={12} className="MuiGrid-panel MuiGrid-smallLeftSpacing">
//             <Typography>
//               The Material Design guidelines are an incredible starting point, but they do not
//               provide guidance on all aspects or needs of an application. In addition to the
//               guidelines-specific implementation,{' '}
//               <b>
//                 we want Material-UI to be whatever is generally useful for application development
//               </b>
//               , all in the spirit of the Material Design guidelines.
//             </Typography>
//             <Typography>
//               Therefore, Material-UI does not only implement the Material Design guidelines, but is
//               also a general use UI library of components. It also means we offer components or
//               combinations that are simply not addressed in the design guidelines.
//             </Typography>
//           </Grid>
//         </Grid>

//         <Grid container spacing={1} alignItems="center">
//           <Grid item md={6} xs={12} className="MuiGrid-panel MuiGrid-smallLeftSpacing">
//             <Typography>
//               <b>
//                 We focus on providing all the low-level tools needed to build a rich user-interface
//                 with React.
//               </b>{' '}
//               We implement the Material Design specification (which is a bar set quite high), you
//               are able to take advantage of it for your own business with any style customization
//               needed.
//             </Typography>
//             <Typography>
//               We want to see companies succeeding using Material-UI in a way that matches their
//               brand, close to the Material Design philosophy or not. We don&apos;t want them to feel
//               that their UI simply looks like another Google product.
//             </Typography>
//           </Grid>
//           <Grid item md={6} xs={12} className="MuiGrid-panel">
//             <Box
//               component="img"
//               alt="Bunch of legos"
//               src="/static/branding/about/focus.jpg"
//               sx={{ width: '100%' }}
//             />
//           </Grid>
//         </Grid>

//         <Grid container spacing={1}>
//           <Grid item lg={6} md={12} className="">
//             <Quote
//               author={{
//                 avatar: '/static/about/olivier.jpg',
//                 name: 'Olivier Tassinari',
//                 title: 'Co-founder',
//               }}
//             >
//               We believe that React is set on a course to dominate the way UIs are built on the web
//               for a very long time. We also believe that the next major iteration is coming with
//               low-code. Material-UI is at the forefront of this transformation.
//             </Quote>
//           </Grid>
//           <Grid item lg={6} md={12} className="MuiGrid-panel MuiGrid-panel-horizontalSpacing-xs">
//             <Typography variant="h4">
//               From a developer&apos;s point of view, we want Material-UI to:
//             </Typography>
//             <BulletItem>Deliver on fully encapsulated/composable React components,</BulletItem>
//             <BulletItem>Be themeable/customizable,</BulletItem>
//             <BulletItem>Be cross browser compatible and accessible,</BulletItem>
//             <BulletItem>
//               Promote developer joy, a sense of community, and an environment where new and
//               experienced developers can learn from each other.
//             </BulletItem>
//           </Grid>
//         </Grid>

//         <Grid container className="MuiGrid-team MuiGrid-panel MuiGrid-relative" spacing={1}>
//           <Box
//             component="img"
//             src="/static/branding/block4.svg"
//             alt=""
//             sx={{
//               width: 210,
//               height: 170,
//               position: 'absolute',
//               right: { xs: '5%', md: '10%' },
//               top: 'calc(100% - 120px)',
//             }}
//           />
//           <Grid item xs={12}>
//             <Typography variant="h2">
//               Team
//             </Typography>
//           </Grid>
//           <Grid item lg={7} xs={12}>
//             <Typography>
//               Material-UI is maintained by a group of invaluable core contributors, with the massive
//               support and involvement of the community.
//             </Typography>
//           </Grid>
//         </Grid>
