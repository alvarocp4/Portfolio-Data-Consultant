import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent, u as unescapeHTML, s as spreadAttributes, j as renderScript, a as renderHead } from '../chunks/astro/server_DaZi--al.mjs';
import 'kleur/colors';
import { b as $$Footer, a as $$Header, $ as $$BaseHead } from '../chunks/Footer_zhXZ_RHu.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts__lf-bKLc.mjs';
import { a as $$Projects, $ as $$HeroSection } from '../chunks/HeroSection_DK9Vh8Uy.mjs';
import 'clsx';
/* empty css                                 */
import '../chunks/index_MaT6fT73.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DvagX5PM.mjs';
import { $ as $$GlowLineSeparator } from '../chunks/GlowLineSeparator_CuSxMVTt.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$9 = createAstro("https://example.com");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { tools = [], speedMs = 25e3 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="overflow-hidden relative z-10 mx-auto px-8 py-4" data-astro-cid-vevcelad> <div class="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" data-astro-cid-vevcelad> <div class="flex will-change-transform w-max translate-x-0"${addAttribute(`animation: carousel-scroll ${speedMs}ms linear infinite`, "style")} data-astro-cid-vevcelad> ${[...tools, ...tools].map((tool) => renderTemplate`<div class="group flex flex-col items-center justify-center px-6 py-7 mx-4 min-w-[160px] md:min-w-[180px] rounded-lg" data-astro-cid-vevcelad> <div class="w-10 h-10 mb-2 flex items-center justify-center" data-astro-cid-vevcelad> <img${addAttribute(tool.logo, "src")}${addAttribute(tool.name, "alt")} width="40" height="40" class="w-full h-full object-contain transition duration-300 group-hover:scale-110 light:grayscale light:opacity-80 dark:invert dark:brightness-0 dark:saturate-0 dark:group-hover:filter-none" data-astro-cid-vevcelad> </div> <span class="text-sm font-semibold text-[color:var(--color-text-muted)] transition-colors" data-astro-cid-vevcelad>${tool.name}</span> </div>`)} </div> </div> </div> `;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/carousel/Carousel.astro", void 0);

const __vite_glob_0_0$1 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20128%20128'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill='%23252f3e'%20d='M36.379%2053.64c0%201.56.168%202.825.465%203.75.336.926.758%201.938%201.347%203.032.207.336.293.672.293.969%200%20.418-.254.84-.8%201.261l-2.653%201.77c-.379.25-.758.379-1.093.379-.422%200-.844-.211-1.266-.59a13.28%2013.28%200%200%201-1.516-1.98%2034.153%2034.153%200%200%201-1.304-2.485c-3.282%203.875-7.41%205.813-12.38%205.813-3.535%200-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086%200-3.578%201.262-6.484%203.833-8.671%202.566-2.192%205.976-3.286%2010.316-3.286%201.43%200%202.902.125%204.46.336%201.56.211%203.161.547%204.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061%2032.633%2023.788%2032%2020.546%2032c-1.473%200-2.988.168-4.547.547a33.416%2033.416%200%200%200-4.547%201.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59%200-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586%201.18-.883%201.472-.758%203.242-1.39%205.304-1.895%202.063-.547%204.254-.8%206.57-.8%205.008%200%208.672%201.136%2011.032%203.41%202.316%202.273%203.492%205.726%203.492%2010.359v13.64Zm-17.094%206.403c1.387%200%202.82-.254%204.336-.758%201.516-.508%202.863-1.433%204-2.695.672-.8%201.18-1.684%201.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401%2034.401%200%200%200-3.871-.719%2031.816%2031.816%200%200%200-3.961-.25c-2.82%200-4.883.547-6.274%201.684-1.387%201.136-2.062%202.734-2.062%204.84%200%201.98.504%203.453%201.558%204.464%201.012%201.051%202.485%201.559%204.422%201.559Zm33.809%204.547c-.758%200-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715%2029.98c-.25-.843-.38-1.39-.38-1.687%200-.672.337-1.05%201.013-1.05h4.125c.8%200%201.347.124%201.644.421.336.25.59.84.84%201.64l7.074%2027.876%206.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423%201.688-.423h3.367c.8%200%201.348.125%201.684.422.336.25.633.84.8%201.64l6.653%2028.212%207.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423%201.644-.423h3.914c.676%200%201.055.336%201.055%201.051%200%20.21-.043.422-.086.676-.043.254-.125.59-.293%201.05L80.801%2062.57c-.254.84-.547%201.387-.887%201.64-.336.255-.883.423-1.598.423h-3.62c-.801%200-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485%2027.117c-.21.844-.46%201.391-.8%201.684-.337.297-.926.422-1.684.422Zm54.105%201.137c-2.187%200-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919%202.919%200%200%201-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25%200%20.503.043.757.129.25.082.629.25%201.05.418a23.102%2023.102%200%200%200%204.634%201.476c1.683.336%203.324.504%205.011.504%202.653%200%204.715-.465%206.145-1.39%201.433-.926%202.191-2.274%202.191-4%200-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105%200-1.77.38-3.328%201.137-4.676a10.829%2010.829%200%200%201%203.031-3.453c1.262-.965%202.696-1.684%204.38-2.188%201.683-.504%203.452-.715%205.304-.715.926%200%201.894.043%202.82.168.969.125%201.852.293%202.738.461.84.211%201.641.422%202.399.676.758.254%201.348.504%201.77.758.59.336%201.011.672%201.261%201.05.254.34.379.802.379%201.391v1.98c0%20.884-.336%201.348-.969%201.348-.336%200-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399%200-4.293.379-5.598%201.18-1.309.797-1.98%202.02-1.98%203.746%200%201.18.421%202.191%201.261%202.988.844.8%202.403%201.602%204.633%202.316l5.98%201.895c3.032.969%205.22%202.316%206.524%204.043%201.305%201.727%201.938%203.707%201.938%205.895%200%201.812-.38%203.453-1.094%204.882-.758%201.434-1.77%202.696-3.074%203.707-1.305%201.051-2.864%201.809-4.672%202.36-1.895.586-3.875.883-6.024.883Zm0%200'/%3e%3cpath%20fill='%23f90'%20d='M118%2073.348c-4.432.063-9.664%201.052-13.621%203.832-1.223.883-1.012%202.062.336%201.894%204.508-.547%2014.44-1.726%2016.21.547%201.77%202.23-1.976%2011.62-3.663%2015.79-.504%201.26.59%201.769%201.726.8%207.41-6.231%209.348-19.242%207.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63%2075.859c-.927.116-1.347%201.236-.368%202.121%2016.508%2014.902%2038.359%2023.872%2062.613%2023.872%2017.305%200%2037.43-5.43%2051.281-15.66%202.273-1.688.297-4.254-2.02-3.204-15.534%206.57-32.421%209.77-47.788%209.77-22.778%200-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z'/%3e%3c/svg%3e";

const __vite_glob_0_1$1 = "data:image/svg+xml,%3csvg%20viewBox='0%200%20128%20128'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m2.5441%20127%2060.809-62.332a1.124%201.124%200%200%200%200.1359-1.4368c-3.6977-5.1625-10.521-6.0578-13.05-9.5268-7.4903-10.275-9.3909-16.092-12.61-15.731a0.98374%200.98374%200%200%200-0.58464%200.3085l-21.966%2022.518c-12.638%2012.944-14.454%2041.475-14.782%2065.367a1.1908%201.1908%200%200%200%202.0473%200.83273z'%20fill='%23017cee'/%3e%3cpath%20d='m126.99%20125.46-62.332-60.813a1.124%201.124%200%200%200-1.4389-0.1359c-5.1625%203.6998-6.0578%2010.521-9.5268%2013.05-10.275%207.4903-16.092%209.3909-15.731%2012.61a0.98374%200.98374%200%200%200%200.3085%200.58248l22.518%2021.966c12.944%2012.638%2041.475%2014.454%2065.367%2014.782a1.1908%201.1908%200%200%200%200.83489-2.0408z'%20fill='%2300ad46'/%3e%3cpath%20d='m60.792%20112.72c-7.076-6.9035-10.355-20.559%203.2058-48.719-22.046%209.8525-29.771%2022.803-25.972%2026.511z'%20fill='%2304d659'/%3e%3cpath%20d='m125.45%201.0113-60.807%2062.332a1.1218%201.1218%200%200%200-0.1359%201.4368c3.6998%205.1625%2010.519%206.0578%2013.05%209.5268%207.4903%2010.275%209.393%2016.092%2012.61%2015.731a0.97943%200.97943%200%200%200%200.58464-0.3085l21.966-22.518c12.638-12.944%2014.454-41.475%2014.782-65.367a1.193%201.193%200%200%200-2.0495-0.83273z'%20fill='%2300c7d4'/%3e%3cpath%20d='m112.73%2067.211c-6.9035%207.076-20.559%2010.355-48.721-3.2058%209.8525%2022.046%2022.803%2029.771%2026.511%2025.972z'%20fill='%2311e1ee'/%3e%3cpath%20d='m1.0017%202.5495%2062.332%2060.807a1.124%201.124%200%200%200%201.4368%200.1359c5.1625-3.6998%206.0578-10.521%209.5268-13.05%2010.275-7.4903%2016.092-9.3909%2015.731-12.61a0.99022%200.99022%200%200%200-0.3085-0.58463l-22.518-21.966c-12.944-12.638-41.475-14.454-65.367-14.782a1.1908%201.1908%200%200%200-0.83273%202.0495z'%20fill='%23e43921'/%3e%3cpath%20d='m67.212%2015.284c7.076%206.9035%2010.355%2020.559-3.2058%2048.721%2022.046-9.8525%2029.771-22.805%2025.972-26.511z'%20fill='%23ff7557'/%3e%3cpath%20d='m15.279%2060.8c6.9035-7.076%2020.559-10.355%2048.721%203.2058-9.8525-22.046-22.803-29.771-26.511-25.972z'%20fill='%230cb6ff'/%3e%3ccircle%20cx='64.009'%20cy='63.995'%20r='2.7182'%20fill='%234a4848'/%3e%3c/svg%3e";

const __vite_glob_0_2$1 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cdefs%3e%3clinearGradient%20id='bitbucket-original-a'%20gradientUnits='userSpaceOnUse'%20x1='28.593'%20y1='14.226'%20x2='16.672'%20y2='23.532'%20gradientTransform='scale(4)'%3e%3cstop%20offset='.176'%20stop-color='%230052cc'/%3e%3cstop%20offset='1'%20stop-color='%232684ff'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20d='M19.082%2020c-1.918%200-3.355%201.758-3.039%203.516l12.95%2079.289c.32%202.078%202.077%203.515%204.155%203.515h62.66c1.442%200%202.72-1.12%203.04-2.558l13.109-80.086c.316-1.918-1.121-3.516-3.039-3.516zM74.07%2077.227H54.09l-5.278-28.293h30.215zm0%200'%20fill='%232684ff'/%3e%3cpath%20d='M107.64%2048.934H78.868L74.07%2077.227H54.09l-23.5%2027.972s1.12.961%202.719.961h62.66c1.441%200%202.719-1.12%203.039-2.558zm0%200'%20fill='url(%23bitbucket-original-a)'/%3e%3c/svg%3e";

const __vite_glob_0_3 = "/_astro/Jenkins-logo.CWiA3Rta.svg";

const __vite_glob_0_4 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3cdefs%3e%3clinearGradient%20id='jira-original-a'%20gradientUnits='userSpaceOnUse'%20x1='22.034'%20y1='9.773'%20x2='17.118'%20y2='14.842'%20gradientTransform='scale(4)'%3e%3cstop%20offset='.176'%20stop-color='%230052cc'/%3e%3cstop%20offset='1'%20stop-color='%232684ff'/%3e%3c/linearGradient%3e%3clinearGradient%20id='jira-original-b'%20gradientUnits='userSpaceOnUse'%20x1='16.641'%20y1='15.564'%20x2='10.957'%20y2='21.094'%20gradientTransform='scale(4)'%3e%3cstop%20offset='.176'%20stop-color='%230052cc'/%3e%3cstop%20offset='1'%20stop-color='%232684ff'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath%20d='M108.023%2016H61.805c0%2011.52%209.324%2020.848%2020.847%2020.848h8.5v8.226c0%2011.52%209.328%2020.848%2020.848%2020.848V19.977A3.98%203.98%200%2000108.023%2016zm0%200'%20fill='%232684ff'/%3e%3cpath%20d='M85.121%2039.04H38.902c0%2011.519%209.325%2020.847%2020.844%2020.847h8.504v8.226c0%2011.52%209.328%2020.848%2020.848%2020.848V43.016a3.983%203.983%200%2000-3.977-3.977zm0%200'%20fill='url(%23jira-original-a)'/%3e%3cpath%20d='M62.219%2062.078H16c0%2011.524%209.324%2020.848%2020.848%2020.848h8.5v8.23c0%2011.52%209.328%2020.844%2020.847%2020.844V66.059a3.984%203.984%200%2000-3.976-3.98zm0%200'%20fill='url(%23jira-original-b)'/%3e%3c/svg%3e";

const __vite_glob_0_5 = "data:image/svg+xml,%3csvg%20width='96'%20height='96'%20viewBox='0%200%2096%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='filter0_f'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='4'%20result='effect1_foregroundBlur'/%3e%3c/filter%3e%3cfilter%20id='filter1_f'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='0.38'%20result='effect1_foregroundBlur'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear'%20x1='71'%20y1='96.0002'%20x2='15'%20y2='-40.9998'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23742774'/%3e%3cstop%20offset='1'%20stop-color='%23BB35A4'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='32'%20y1='0.0002436'%20x2='78'%20y2='96.0002'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E48CC7'/%3e%3cstop%20offset='1'%20stop-color='%23D467B9'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='62'%20y1='29.0002'%20x2='76'%20y2='72'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23E9A1CB'/%3e%3cstop%20offset='1'%20stop-color='%23E48CC7'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0'%3e%3crect%20width='96'%20height='96'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1'%3e%3crect%20width='96'%20height='96'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip2'%3e%3crect%20width='96'%20height='96'%20fill='white'%20transform='translate(0%200.00012207)'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip0)'%3e%3cg%20clip-path='url(%23clip1)'%3e%3cg%20clip-path='url(%23clip2)'%3e%3cmask%20id='mask0'%20mask-type='alpha'%20maskUnits='userSpaceOnUse'%20x='-1'%20y='1'%20width='97'%20height='94'%3e%3cpath%20d='M1.45715%2044.049C-0.522237%2046.3111%20-0.522238%2049.6889%201.45715%2051.951L36.9897%2092.5596C38.5833%2094.381%2041.4167%2094.381%2043.0103%2092.5596L46.8367%2088.1866L51.0504%2092.7833C52.6358%2094.5128%2055.3623%2094.5128%2056.9476%2092.7833L94.2825%2052.0543C96.3853%2049.7604%2096.3853%2046.2396%2094.2825%2043.9457L56.9476%203.21667C55.3623%201.4872%2052.6358%201.4872%2051.0504%203.21667L46.8367%207.81341L43.0103%203.44035C41.4167%201.61904%2038.5833%201.61904%2036.9897%203.44035L1.45715%2044.049Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0)'%3e%3cpath%20d='M40%2096L-2%2048L40%200L82%2048L40%2096Z'%20fill='url(%23paint0_linear)'/%3e%3cg%20filter='url(%23filter0_f)'%3e%3cpath%20d='M53.999%202L97.999%2050L53.999%2098L34.4767%2076.7029C33.0748%2075.1736%2033.0748%2072.8264%2034.4767%2071.2971L51.5214%2052.7029C52.9232%2051.1736%2052.9232%2048.8264%2051.5214%2047.2971L34.4767%2028.7029C33.0748%2027.1736%2033.0748%2024.8264%2034.4767%2023.2971L53.999%202Z'%20fill='black'%20fill-opacity='0.32'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f)'%3e%3cpath%20d='M53.999%200.380127L97.999%2048.3801L53.999%2096.3801L34.4767%2075.083C33.0748%2073.5537%2033.0748%2071.2065%2034.4767%2069.6772L51.5214%2051.083C52.9232%2049.5537%2052.9232%2047.2065%2051.5214%2045.6772L34.4767%2027.083C33.0748%2025.5537%2033.0748%2023.2065%2034.4767%2021.6772L53.999%200.380127Z'%20fill='black'%20fill-opacity='0.24'/%3e%3c/g%3e%3cpath%20d='M53.999%200L97.999%2048L53.999%2096L34.4767%2074.7029C33.0748%2073.1736%2033.0748%2070.8264%2034.4767%2069.2971L51.5214%2050.7029C52.9232%2049.1736%2052.9232%2046.8264%2051.5214%2045.2971L34.4767%2026.7029C33.0748%2025.1736%2033.0748%2022.8264%2034.4767%2021.2971L53.999%200Z'%20fill='url(%23paint1_linear)'/%3e%3cpath%20d='M73.0514%2027.2167C74.6367%2025.4872%2077.3633%2025.4872%2078.9486%2027.2167L98%2048L78.9486%2068.7833C77.3633%2070.5128%2074.6367%2070.5128%2073.0514%2068.7833L57.7165%2052.0543C55.6137%2049.7604%2055.6137%2046.2396%2057.7165%2043.9457L73.0514%2027.2167Z'%20fill='url(%23paint2_linear)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const __vite_glob_0_6 = "data:image/svg+xml,%3csvg%20width='96'%20height='96'%20viewBox='0%200%2096%2096'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cfilter%20id='filter0_f'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='0.4'%20result='effect1_foregroundBlur'/%3e%3c/filter%3e%3cfilter%20id='filter1_f'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeGaussianBlur%20stdDeviation='4'%20result='effect1_foregroundBlur'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear'%20x1='43'%20y1='55'%20x2='29'%20y2='10'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%230D36A5'/%3e%3cstop%20offset='1'%20stop-color='%231152D4'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='46'%20y1='10'%20x2='46'%20y2='86'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2384CAFF'/%3e%3cstop%20offset='1'%20stop-color='%2361B1FB'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='37.5'%20y1='10'%20x2='37.5'%20y2='86'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%233B90F5'/%3e%3cstop%20offset='1'%20stop-color='%232A78EE'/%3e%3c/linearGradient%3e%3cclipPath%20id='clip0'%3e%3crect%20width='96'%20height='96'%20fill='white'/%3e%3c/clipPath%3e%3cclipPath%20id='clip1'%3e%3crect%20width='96'%20height='96'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip0)'%3e%3cg%20clip-path='url(%23clip1)'%3e%3cmask%20id='mask0'%20mask-type='alpha'%20maskUnits='userSpaceOnUse'%20x='-1'%20y='10'%20width='97'%20height='76'%3e%3cpath%20d='M61.2116%2010C62.3496%2010%2063.4337%2010.4847%2064.1925%2011.3328L94.6136%2045.3328C95.9723%2046.8514%2095.9723%2049.1486%2094.6136%2050.6672L64.1925%2084.6672C63.4337%2085.5153%2062.3496%2086%2061.2116%2086H3.94634C0.488777%2086%20-1.34012%2081.9095%200.965366%2079.3328L29%2048L0.965366%2016.6672C-1.34012%2014.0905%200.488777%2010%203.94634%2010H61.2116Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0)'%3e%3cpath%20d='M63%2010L29%2048L-5%2010H63Z'%20fill='url(%23paint0_linear)'/%3e%3cg%20filter='url(%23filter0_f)'%3e%3cpath%20d='M63%2010.4L-5%2086.4H63L97%2048.4L63%2010.4Z'%20fill='black'%20fill-opacity='0.24'/%3e%3c/g%3e%3cg%20filter='url(%23filter1_f)'%3e%3cpath%20d='M63%2012L-5%2088H63L97%2050L63%2012Z'%20fill='black'%20fill-opacity='0.32'/%3e%3c/g%3e%3cpath%20d='M-5%2086L63%2010L97%2048L63%2086H-5Z'%20fill='url(%23paint1_linear)'/%3e%3cpath%20d='M-5%2086L63%2010L80%2029L29%2086H-5Z'%20fill='url(%23paint2_linear)'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const __vite_glob_0_7 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20width='630px'%20height='630px'%20viewBox='0%200%20630%20630'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3c!--%20Generator:%20Sketch%2053.2%20(72643)%20-%20https://sketchapp.com%20--%3e%3ctitle%3ePBI%20Logo%3c/title%3e%3cdesc%3eCreated%20with%20Sketch.%3c/desc%3e%3cdefs%3e%3clinearGradient%20x1='50%25'%20y1='0%25'%20x2='50%25'%20y2='100%25'%20id='linearGradient-1'%3e%3cstop%20stop-color='%23EBBB14'%20offset='0%25'%3e%3c/stop%3e%3cstop%20stop-color='%23B25400'%20offset='100%25'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20x1='50%25'%20y1='0%25'%20x2='50%25'%20y2='100%25'%20id='linearGradient-2'%3e%3cstop%20stop-color='%23F9E583'%20offset='0%25'%3e%3c/stop%3e%3cstop%20stop-color='%23DE9800'%20offset='100%25'%3e%3c/stop%3e%3c/linearGradient%3e%3cpath%20d='M346,604%20L346,630%20L320,630%20L153,630%20C138.640597,630%20127,618.359403%20127,604%20L127,183%20C127,168.640597%20138.640597,157%20153,157%20L320,157%20C334.359403,157%20346,168.640597%20346,183%20L346,604%20Z'%20id='path-3'%3e%3c/path%3e%3cfilter%20x='-9.1%25'%20y='-6.3%25'%20width='136.5%25'%20height='116.9%25'%20filterUnits='objectBoundingBox'%20id='filter-4'%3e%3cfeOffset%20dx='20'%20dy='10'%20in='SourceAlpha'%20result='shadowOffsetOuter1'%3e%3c/feOffset%3e%3cfeGaussianBlur%20stdDeviation='10'%20in='shadowOffsetOuter1'%20result='shadowBlurOuter1'%3e%3c/feGaussianBlur%3e%3cfeColorMatrix%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.0530211976%200'%20type='matrix'%20in='shadowBlurOuter1'%3e%3c/feColorMatrix%3e%3c/filter%3e%3clinearGradient%20x1='50%25'%20y1='0%25'%20x2='50%25'%20y2='100%25'%20id='linearGradient-5'%3e%3cstop%20stop-color='%23F9E68B'%20offset='0%25'%3e%3c/stop%3e%3cstop%20stop-color='%23F3CD32'%20offset='100%25'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3cg%20id='PBI-Logo'%20stroke='none'%20stroke-width='1'%20fill='none'%20fill-rule='evenodd'%3e%3cg%20id='Group'%20transform='translate(77.500000,%200.000000)'%3e%3crect%20id='Rectangle'%20fill='url(%23linearGradient-1)'%20x='256'%20y='0'%20width='219'%20height='630'%20rx='26'%3e%3c/rect%3e%3cg%20id='Combined-Shape'%3e%3cuse%20fill='black'%20fill-opacity='1'%20filter='url(%23filter-4)'%20xlink:href='%23path-3'%3e%3c/use%3e%3cuse%20fill='url(%23linearGradient-2)'%20fill-rule='evenodd'%20xlink:href='%23path-3'%3e%3c/use%3e%3c/g%3e%3cpath%20d='M219,604%20L219,630%20L193,630%20L26,630%20C11.6405965,630%201.75851975e-15,618.359403%200,604%20L0,341%20C-1.75851975e-15,326.640597%2011.6405965,315%2026,315%20L193,315%20C207.359403,315%20219,326.640597%20219,341%20L219,604%20Z'%20id='Combined-Shape'%20fill='url(%23linearGradient-5)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e";

const __vite_glob_0_8 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20128%20128'%3e%3clinearGradient%20id='python-original-a'%20gradientUnits='userSpaceOnUse'%20x1='70.252'%20y1='1237.476'%20x2='170.659'%20y2='1151.089'%20gradientTransform='matrix(.563%200%200%20-.568%20-29.215%20707.817)'%3e%3cstop%20offset='0'%20stop-color='%235A9FD4'/%3e%3cstop%20offset='1'%20stop-color='%23306998'/%3e%3c/linearGradient%3e%3clinearGradient%20id='python-original-b'%20gradientUnits='userSpaceOnUse'%20x1='209.474'%20y1='1098.811'%20x2='173.62'%20y2='1149.537'%20gradientTransform='matrix(.563%200%200%20-.568%20-29.215%20707.817)'%3e%3cstop%20offset='0'%20stop-color='%23FFD43B'/%3e%3cstop%20offset='1'%20stop-color='%23FFE873'/%3e%3c/linearGradient%3e%3cpath%20fill='url(%23python-original-a)'%20d='M63.391%201.988c-4.222.02-8.252.379-11.8%201.007-10.45%201.846-12.346%205.71-12.346%2012.837v9.411h24.693v3.137H29.977c-7.176%200-13.46%204.313-15.426%2012.521-2.268%209.405-2.368%2015.275%200%2025.096%201.755%207.311%205.947%2012.519%2013.124%2012.519h8.491V67.234c0-8.151%207.051-15.34%2015.426-15.34h24.665c6.866%200%2012.346-5.654%2012.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037%209.557c2.55%200%204.634%202.117%204.634%204.721%200%202.593-2.083%204.69-4.634%204.69-2.56%200-4.633-2.097-4.633-4.69-.001-2.604%202.073-4.721%204.633-4.721z'%20transform='translate(0%2010.26)'/%3e%3cpath%20fill='url(%23python-original-b)'%20d='M91.682%2028.38v10.966c0%208.5-7.208%2015.655-15.426%2015.655H51.591c-6.756%200-12.346%205.783-12.346%2012.549v23.515c0%206.691%205.818%2010.628%2012.346%2012.547%207.816%202.297%2015.312%202.713%2024.665%200%206.216-1.801%2012.346-5.423%2012.346-12.547v-9.412H63.938v-3.138h37.012c7.176%200%209.852-5.005%2012.348-12.519%202.578-7.735%202.467-15.174%200-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809%2087.927c2.561%200%204.634%202.097%204.634%204.692%200%202.602-2.074%204.719-4.634%204.719-2.55%200-4.633-2.117-4.633-4.719%200-2.595%202.083-4.692%204.633-4.692z'%20transform='translate(0%2010.26)'/%3e%3cradialGradient%20id='python-original-c'%20cx='1825.678'%20cy='444.45'%20r='26.743'%20gradientTransform='matrix(0%20-.24%20-1.055%200%20532.979%20557.576)'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0'%20stop-color='%23B8B8B8'%20stop-opacity='.498'/%3e%3cstop%20offset='1'%20stop-color='%237F7F7F'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cpath%20opacity='.444'%20fill='url(%23python-original-c)'%20d='M97.309%20119.597c0%203.543-14.816%206.416-33.091%206.416-18.276%200-33.092-2.873-33.092-6.416%200-3.544%2014.815-6.417%2033.092-6.417%2018.275%200%2033.091%202.872%2033.091%206.417z'/%3e%3c/svg%3e";

const __vite_glob_0_9 = "data:image/svg+xml,%3csvg%20height='1em'%20style='flex:none;line-height:1'%20viewBox='0%200%2024%2024'%20width='1em'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eSnowflake%3c/title%3e%3cpath%20clip-rule='evenodd'%20d='M23.252%2010.365l-2.843%201.636%202.843%201.631a1.47%201.47%200%2001.697.903%201.492%201.492%200%2001-.15%201.135c-.202.342-.53.591-.912.693a1.498%201.498%200%2001-1.132-.15l-5.09-2.924a1.473%201.473%200%2001-.68-.851%201.446%201.446%200%2001-.068-.485%201.5%201.5%200%2001.745-1.248l5.09-2.921a1.496%201.496%200%20012.044.547%201.479%201.479%200%2001-.544%202.034zm-2.692%207.927l-5.087-2.92a1.477%201.477%200%2000-.867-.195%201.478%201.478%200%2000-.982.468c-.257.276-.4.639-.403%201.017v5.847A1.49%201.49%200%200014.718%2024c.828%200%201.497-.668%201.497-1.491v-3.27l2.849%201.636a1.493%201.493%200%20002.044-.544%201.49%201.49%200%2000-.548-2.04zm-5.87-5.719l-2.116%202.102a.42.42%200%2001-.265.112h-.621a.427.427%200%2001-.265-.112l-2.115-2.102a.42.42%200%2001-.11-.262v-.62a.43.43%200%2001.11-.265l2.114-2.102a.426.426%200%2001.264-.11h.623a.422.422%200%2001.265.11l2.116%202.102a.43.43%200%2001.109.265v.62a.428.428%200%2001-.11.262zM13%2011.99a.442.442%200%2000-.113-.266l-.612-.607a.431.431%200%2000-.266-.11h-.024a.426.426%200%2000-.264.11l-.612.607a.436.436%200%2000-.107.266v.024c0%20.085.047.202.107.262l.612.61c.061.06.179.11.264.11h.024a.434.434%200%2000.266-.11l.612-.61a.429.429%200%2000.112-.262v-.024zM3.436%205.704l5.089%202.924c.274.157.578.219.868.195.375-.026.726-.194.983-.47.256-.275.4-.64.403-1.017V1.489C10.78.667%2010.11%200%209.284%200c-.829%200-1.498.667-1.498%201.49v3.27l-2.85-1.639a1.496%201.496%200%2000-2.045.546%201.489%201.489%200%2000.546%202.037zm11.17%203.119c.29.024.594-.038.866-.195l5.087-2.923a1.474%201.474%200%2000.697-.903%201.496%201.496%200%2000-.149-1.135%201.496%201.496%200%2000-2.044-.545L16.215%204.76V1.489C16.215.667%2015.546%200%2014.718%200c-.83%200-1.497.667-1.497%201.49v5.845a1.491%201.491%200%20001.385%201.487zm-5.213%206.354a1.479%201.479%200%2000-.868.194l-5.089%202.92a1.476%201.476%200%2000-.696.905%201.498%201.498%200%2000.148%201.135%201.496%201.496%200%20002.044.543l2.851-1.636v3.27c0%20.825.67%201.491%201.498%201.491.826%200%201.496-.667%201.496-1.49v-5.847a1.5%201.5%200%2000-.401-1.017%201.477%201.477%200%2000-.982-.468zm-1.38-2.74c.05-.156.072-.32.068-.484a1.497%201.497%200%2000-.751-1.248l-5.084-2.92a1.499%201.499%200%2000-2.045.547%201.481%201.481%200%2000.549%202.034l2.841%201.636L.75%2013.633a1.47%201.47%200%2000-.698.903%201.492%201.492%200%2000.15%201.135c.202.343.53.592.912.693.382.102.789.048%201.132-.15l5.086-2.924c.345-.195.577-.505.684-.852z'%20fill='%23249EDC'%20fill-rule='evenodd'%3e%3c/path%3e%3c/svg%3e";

const __vite_glob_0_10 = "data:image/svg+xml,%3csvg%20height='2467'%20width='2500'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2060.3%2059.5'%3e%3cpath%20d='M28.5%2040.2h3.3v-9h8.3V28h-8.3v-9h-3.3v9h-8.2v3.2h8.2z'%20fill='%23e8762d'/%3e%3cpath%20d='M13.2%2053.2H16v-8h7.4v-2.5H16v-8.1h-2.8v8.1H5.8v2.5h7.4z'%20fill='%23c72037'/%3e%3cpath%20d='M44.3%2024.3h2.8v-8h7.5v-2.4h-7.5V5.8h-2.8v8.1h-7.4v2.4h7.4z'%20fill='%235b879b'/%3e%3cpath%20d='M29%2059.5h2.4v-5.7h5.1v-2.1h-5.1V46H29v5.7h-5v2.1h5z'%20fill='%235c6692'/%3e%3cpath%20d='M13.3%2024.3h2.6v-8.1h7.5v-2.3h-7.5V5.8h-2.6v8.1H5.8v2.3h7.5z'%20fill='%23eb9129'/%3e%3cpath%20d='M52.8%2036.3h2.4v-5.6h5.1v-2.2h-5.1v-5.6h-2.4v5.6h-5v2.2h5z'%20fill='%235c6692'/%3e%3cpath%20clip-rule='evenodd'%20d='M44.3%2053.2h2.8v-8h7.5v-2.5h-7.5v-8.1h-2.8v8.1h-7.4v2.5h7.4z'%20fill='%231f457e'%20fill-rule='evenodd'/%3e%3cpath%20d='M36.1%207.2V5.5h-5V0h-1.8v5.5h-5v1.7h5v5.5h1.8V7.2zM5%2035.9h1.8v-5.5h5v-1.7h-5v-5.4H5v5.4H0v1.8l5-.1z'%20fill='%237199a6'/%3e%3c/svg%3e";

const __vite_glob_0_11 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='none'%20viewBox='0%200%2024%2024'%20id='Dbt-Icon--Streamline-Svg-Logos'%20height='24'%20width='24'%3e%3cdesc%3e%20Dbt%20Icon%20Streamline%20Icon:%20https://streamlinehq.com%20%3c/desc%3e%3cpath%20fill='%23ff694a'%20d='M22.75135%201.2273975C23.303775%201.75859%2023.665%202.459765%2023.75%203.224675c0%200.318725%20-0.085%200.5312%20-0.276225%200.934925%20-0.191225%200.4037%20-2.549725%204.483275%20-3.2509%205.6094%20-0.4037%200.658675%20-0.616175%201.44485%20-0.616175%202.20975%200%200.786175%200.212475%201.5511%200.616175%202.209775%200.701175%201.126125%203.059675%205.226925%203.2509%205.63065C23.665%2020.222875%2023.75%2020.4141%2023.75%2020.7328c-0.085%200.764925%20-0.42495%201.466125%20-0.9774%201.976075%20-0.5312%200.552425%20-1.23235%200.91365%20-1.976025%200.977375%20-0.318725%200%20-0.5312%20-0.084975%20-0.91365%20-0.276225%20-0.382475%20-0.191225%20-4.547025%20-2.485975%20-5.673175%20-3.18715%20-0.084975%20-0.0425%20-0.169975%20-0.106225%20-0.2762%20-0.14875L8.36665%2016.780725c0.127475%201.0624%200.594925%202.0823%201.359825%202.825975%200.14875%200.148725%200.2975%200.276225%200.467475%200.4037%20-0.1275%200.063725%20-0.276225%200.1275%20-0.4037%200.212475%20-1.12615%200.701175%20-5.22695%203.059675%20-5.63065%203.2509C3.755875%2023.665%203.56465%2023.75%203.224675%2023.75c-0.76491%20-0.085%20-1.466085%20-0.42495%20-1.9760325%20-0.9774C0.6962025%2022.2414%200.33499%2021.54025%200.25%2020.775325c0.0212475%20-0.318725%200.10624%20-0.637425%200.2762225%20-0.91365%200.19123%20-0.403725%202.5497275%20-4.50455%203.2509025%20-5.630675%200.403725%20-0.658675%200.616175%20-1.4236%200.616175%20-2.20975%200%20-0.786175%20-0.21245%20-1.5511%20-0.616175%20-2.209775%20-0.701175%20-1.1686%20-3.0809225%20-5.269425%20-3.2509025%20-5.67315C0.35624%203.8621%200.2712475%203.5434%200.25%203.224675c0.08499%20-0.76491%200.424955%20-1.466085%200.9773975%20-1.9972775C1.75859%200.674955%202.459765%200.33499%203.224675%200.25c0.318725%200.0212475%200.637425%200.10624%200.934925%200.2762225%200.33995%200.1487325%203.335875%201.8910475%204.92945%202.8259525l0.361225%200.212475c0.127475%200.085%200.233725%200.148725%200.318725%200.191225l0.169975%200.106225%205.673125%203.357175c-0.127475%20-1.274875%20-0.78615%20-2.443525%20-1.80605%20-3.229675%200.1275%20-0.063725%200.276225%20-0.1275%200.4037%20-0.212475%201.12615%20-0.701175%205.22695%20-3.0809225%205.63065%20-3.2509025%200.27625%20-0.1699825%200.59495%20-0.254975%200.934925%20-0.2762225%200.743675%200.08499%201.44485%200.424955%201.976025%200.9773975ZM12.29745%2013.5086l1.21115%20-1.21115c0.169975%20-0.169975%200.169975%20-0.424925%200%20-0.5949l-1.21115%20-1.21115c-0.169975%20-0.169975%20-0.424925%20-0.169975%20-0.5949%200l-1.21115%201.21115c-0.169975%200.169975%20-0.169975%200.424925%200%200.5949l1.21115%201.21115c0.148725%200.148725%200.424925%200.148725%200.5949%200Z'%20stroke-width='0.25'%3e%3c/path%3e%3c/svg%3e";

const modules$1 = /* #__PURE__ */ Object.assign({"../assets/logos/AWS-logo.svg": __vite_glob_0_0$1,"../assets/logos/Airflow-logo.svg": __vite_glob_0_1$1,"../assets/logos/Bitbucket-logo.svg": __vite_glob_0_2$1,"../assets/logos/Jenkins-logo.svg": __vite_glob_0_3,"../assets/logos/Jira-logo.svg": __vite_glob_0_4,"../assets/logos/PowerApps-logo.svg": __vite_glob_0_5,"../assets/logos/PowerAutomate-logo.svg": __vite_glob_0_6,"../assets/logos/PowerBI-logo.svg": __vite_glob_0_7,"../assets/logos/Python-logo.svg": __vite_glob_0_8,"../assets/logos/Snowflake-logo.svg": __vite_glob_0_9,"../assets/logos/Tableau-logo.svg": __vite_glob_0_10,"../assets/logos/dbt-logo.svg": __vite_glob_0_11



});
function toNiceName$1(filePath) {
  const base = filePath.split("/").pop() || "";
  const withoutExt = base.replace(/\.[^.]+$/, "");
  const withoutLogo = withoutExt.replace(/-?logo$/i, "");
  const normalized = withoutLogo.replace(/[_-]+/g, " ");
  const spaced = normalized.replace(/([a-z])([A-Z])/g, "$1 $2");
  const trimmed = spaced.trim().replace(/\s{2,}/g, " ");
  return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}
const logos = Object.entries(modules$1).map(([path, url]) => ({ name: toNiceName$1(path), logo: url })).sort((a, b) => b.name.localeCompare(a.name));

const $$Astro$8 = createAstro("https://example.com");
const $$SkillsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SkillsSection;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="skills" class="w-full py-8 scroll-mt-16"> <div class="mx-auto max-w-6xl px-4"> ${title && renderTemplate`<h2 class="text-3xl md:text-4xl font-semibold text-center mb-6 text-foreground">${title}</h2>`} <div class="mb-6"> ${renderComponent($$result, "Carousel", $$Carousel, { "tools": logos })} </div> </div> </section>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/sections/SkillsSection.astro", void 0);

const jobIconRaw = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n<svg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M4 12H3V8C3 6.89543 3.89543 6 5 6H9M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12M4 12H10M20 12H21V8C21 6.89543 20.1046 6 19 6H15M20 12H14M14 12V10H10V12M14 12V14H10V12M9 6V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V6M9 6H15\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>";

const companyIconRaw = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n<svg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>";

const locationIconRaw = "<?xml version=\"1.0\" encoding=\"utf-8\"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n<svg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7.37584 4.85915C8.65549 3.61971 10.1969 3 12 3C13.8031 3 15.3372 3.61267 16.6023 4.83803C17.8675 6.06339 18.5 7.54929 18.5 9.29577C18.5 10.169 18.2746 11.169 17.8238 12.2958C17.373 13.4225 16.8277 14.4789 16.1879 15.4648C15.5481 16.4507 14.9156 17.3732 14.2903 18.2324C13.665 19.0916 13.1342 19.7746 12.698 20.2817L12 21C11.8255 20.8028 11.5928 20.5423 11.302 20.2183C11.0112 19.8944 10.4877 19.2465 9.73154 18.2746C8.97539 17.3028 8.31376 16.3592 7.74664 15.4437C7.17953 14.5282 6.66331 13.493 6.19799 12.338C5.73266 11.1831 5.5 10.169 5.5 9.29577C5.5 7.54929 6.12527 6.07043 7.37584 4.85915Z\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n<path d=\"M13 9.5C13 10.0523 12.5523 10.5 12 10.5C11.4477 10.5 11 10.0523 11 9.5C11 8.94772 11.4477 8.5 12 8.5C12.5523 8.5 13 8.94772 13 9.5Z\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n</svg>";

const $$Astro$7 = createAstro("https://example.com");
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Timeline;
  function normalizeIcon(raw) {
    let s = raw.replace(/<\?xml[\s\S]*?\?>/g, "").replace(/<!--([\s\S]*?)-->/g, "").replace(/width=\"[^\"]+\"/g, 'width="16"').replace(/height=\"[^\"]+\"/g, 'height="16"').replace(/stroke=\"#000000\"/g, 'stroke="currentColor"').replace(/fill=\"#000000\"/g, 'fill="none"').replace(/fill=\"#ffffff\"/gi, 'fill="none"');
    s = s.replace(/<svg([^>]*)>/, (m, attrs) => {
      let a = attrs;
      if (!/fill=/.test(a)) a += ' fill="none"';
      if (!/stroke=/.test(a)) a += ' stroke="currentColor"';
      return `<svg${a}>`;
    });
    return s;
  }
  const props = Astro2.props;
  const jobIcon = props.icons?.job ?? normalizeIcon(jobIconRaw);
  const companyIcon = props.icons?.company ?? normalizeIcon(companyIconRaw);
  const locationIcon = props.icons?.location ?? normalizeIcon(locationIconRaw);
  const { items, centered = true } = props;
  return renderTemplate`${centered ? renderTemplate`${maybeRenderHead()}<div class="relative mx-auto max-w-5xl px-0 md:px-0"><!-- Center vertical line --><div class="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[var(--border)]"></div><div class="space-y-12">${items.map((item, index) => {
    const isLeft = index % 2 === 0;
    return renderTemplate`<div${addAttribute([
      "relative flex items-stretch",
      isLeft ? "justify-start" : "justify-end"
    ], "class:list")}><!-- Dot on the center line --><div class="absolute left-1/2 -translate-x-1/2 top-4 size-3 rounded-full bg-[var(--accent)] ring-4 ring-[color:var(--background)]"></div><div${addAttribute([
      "w-full md:w-1/2",
      isLeft ? "pr-6 md:pr-12" : "pl-6 md:pl-12"
    ], "class:list")}><div class="card-surface p-6"><div class="mb-2 space-y-1"><h3 class="text-xs leading-snug font-semibold m-0 flex items-center gap-2"><span class="inline-flex" aria-hidden="true">${unescapeHTML(jobIcon)}</span>${item.title}</h3><p class="text-sm font-medium text-[color:var(--color-text-muted)] m-0 flex items-center gap-2"><span class="inline-flex" aria-hidden="true">${unescapeHTML(companyIcon)}</span>${item.company}</p><p class="text-sm text-[color:var(--color-text-muted)] m-0 flex items-center gap-2"><span class="inline-flex" aria-hidden="true">${unescapeHTML(locationIcon)}</span>${item.region}</p></div><p class="text-[color:var(--color-text-secondary)] m-0">${item.description}</p>${item.technologies && item.technologies.length > 0 && renderTemplate`<div class="mt-3 flex flex-wrap gap-2">${item.technologies.map((tech) => renderTemplate`<span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style="background: rgba(var(--accent-rgb),0.1); color: var(--accent); border: 1px solid rgba(var(--accent-rgb),0.3);">${tech}</span>`)}</div>`}</div></div></div>`;
  })}</div></div>` : renderTemplate`<div class="relative mx-auto max-w-5xl px-0 md:px-0"><!-- Left vertical line --><div class="pointer-events-none absolute inset-y-0 left-0 md:left-5 w-px bg-[var(--border)]"></div><div class="space-y-8 md:space-y-12">${items.map((item) => renderTemplate`<div class="relative pl-5 md:pl-16"><div class="absolute left-0 md:left-5 top-3 md:top-4 size-2 md:size-3 rounded-full bg-[var(--accent)] ring-2 md:ring-4 ring-[color:var(--background)]"></div><div class="card-surface p-4 md:p-6 w-full min-w-0"><div class="mb-2 space-y-1"><h3 class="text-xs leading-snug font-semibold m-0 flex items-center gap-2"><span class="inline-flex" aria-hidden="true">${unescapeHTML(jobIcon)}</span>${item.title}</h3><p class="text-sm font-medium text-[color:var(--color-text-muted)] m-0 flex items-center gap-2"><span class="inline-flex" aria-hidden="true">${unescapeHTML(companyIcon)}</span>${item.company}</p><p class="text-sm text-[color:var(--color-text-muted)] m-0 flex items-center gap-2"><span class="inline-flex" aria-hidden="true">${unescapeHTML(locationIcon)}</span>${item.region}</p></div><p class="text-[color:var(--color-text-secondary)] m-0">${item.description}</p>${item.technologies && item.technologies.length > 0 && renderTemplate`<div class="mt-3 flex flex-wrap gap-2">${item.technologies.map((tech) => renderTemplate`<span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style="background: rgba(var(--accent-rgb),0.1); color: var(--accent); border: 1px solid rgba(var(--accent-rgb),0.3);">${tech}</span>`)}</div>`}</div></div>`)}</div></div>`}`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/timeline/Timeline.astro", void 0);

function sanitizeToOutline(svg, size = 16) {
  let s = svg.replace(/<\?xml[\s\S]*?\?>/g, "").replace(/<!--([\s\S]*?)-->/g, "").replace(/<svg([^>]*?)>/, (m, attrs) => {
    let a = attrs.replace(/\swidth=\"[^\"]*\"/g, "").replace(/\sheight=\"[^\"]*\"/g, "");
    if (!/\sstroke=/.test(a)) a += ' stroke="currentColor"';
    if (!/\sfill=/.test(a)) a += ' fill="none"';
    return `<svg${a} width="${size}" height="${size}">`;
  }).replace(/fill=\"(?!none)[^\"]*\"/gi, 'fill="none"').replace(/stroke=\"(?!none)[^\"]*\"/gi, 'stroke="currentColor"');
  const tags = ["path", "rect", "circle", "polygon", "ellipse"];
  for (const tag of tags) {
    const re = new RegExp(`<${tag}([^>]*)>`, "gi");
    s = s.replace(re, (m, attrs) => {
      if (/fill=/.test(attrs)) return m;
      return `<${tag}${attrs} fill="none">`;
    });
  }
  return s;
}

const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15)
};
const work = [
  {
    title: "Senior Software Engineer",
    company: "Acme Cloud",
    region: "United States",
    description: "Led the design and delivery of a multi‑tenant platform, decomposed critical monolith paths into services, improved p95 latency by 40%, defined SLOs and on‑call rotations, and mentored junior engineers.",
    technologies: [
      "TypeScript",
      "Node.js",
      "React",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GraphQL"
    ]
  },
  {
    title: "Staff Software Engineer",
    company: "FinchPay",
    region: "Global",
    description: "Architected event‑driven payment services with idempotency and retries, introduced Kafka for async processing, enforced API versioning, and drove observability with structured logging and tracing.",
    technologies: [
      "TypeScript",
      "NestJS",
      "Kafka",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "OpenTelemetry",
      "AWS"
    ]
  },
  {
    title: "Senior Frontend Engineer",
    company: "Insight Analytics",
    region: "Europe",
    description: "Owned the design system and SSR/ISR strategy, improved Core Web Vitals (LCP/INP) into the green, and shipped accessible UI components with strong tests and story coverage.",
    technologies: [
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
      "Playwright",
      "Vitest"
    ]
  },
  {
    title: "Software Engineer",
    company: "LaunchPad",
    region: "Brazil",
    description: "Built MVPs end‑to‑end: designed REST/GraphQL APIs, set up CI/CD with preview environments, introduced feature flags, and migrated data to Postgres.",
    technologies: [
      "Node.js",
      "Express",
      "GraphQL",
      "Supabase",
      "PostgreSQL",
      "GitHub Actions",
      "Docker"
    ]
  }
];

const $$Astro$6 = createAstro("https://example.com");
const $$WorkExperience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$WorkExperience;
  const { items, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="experience" class="w-full py-8 scroll-mt-16"> <div class="mx-auto max-w-6xl px-5 md:px-6"> ${title && renderTemplate`<h2 class="text-3xl md:text-4xl font-semibold text-center mb-10 text-foreground">${title}</h2>`} <div class="pt-5"> ${renderComponent($$result, "Timeline", $$Timeline, { "items": items, "icons": workIcons, "centered": false })} </div> </div> </section>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/sections/WorkExperience.astro", void 0);

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const AirflowLogo = createSvgComponent({"meta":{"src":"/_astro/Airflow-logo.CBc1qqhK.svg","width":128,"height":128,"format":"svg"},"attributes":{"viewBox":"0 0 128 128"},"children":"\n<path d=\"m2.5441 127 60.809-62.332a1.124 1.124 0 0 0 0.1359-1.4368c-3.6977-5.1625-10.521-6.0578-13.05-9.5268-7.4903-10.275-9.3909-16.092-12.61-15.731a0.98374 0.98374 0 0 0-0.58464 0.3085l-21.966 22.518c-12.638 12.944-14.454 41.475-14.782 65.367a1.1908 1.1908 0 0 0 2.0473 0.83273z\" fill=\"#017cee\" />\n<path d=\"m126.99 125.46-62.332-60.813a1.124 1.124 0 0 0-1.4389-0.1359c-5.1625 3.6998-6.0578 10.521-9.5268 13.05-10.275 7.4903-16.092 9.3909-15.731 12.61a0.98374 0.98374 0 0 0 0.3085 0.58248l22.518 21.966c12.944 12.638 41.475 14.454 65.367 14.782a1.1908 1.1908 0 0 0 0.83489-2.0408z\" fill=\"#00ad46\" />\n<path d=\"m60.792 112.72c-7.076-6.9035-10.355-20.559 3.2058-48.719-22.046 9.8525-29.771 22.803-25.972 26.511z\" fill=\"#04d659\" />\n<path d=\"m125.45 1.0113-60.807 62.332a1.1218 1.1218 0 0 0-0.1359 1.4368c3.6998 5.1625 10.519 6.0578 13.05 9.5268 7.4903 10.275 9.393 16.092 12.61 15.731a0.97943 0.97943 0 0 0 0.58464-0.3085l21.966-22.518c12.638-12.944 14.454-41.475 14.782-65.367a1.193 1.193 0 0 0-2.0495-0.83273z\" fill=\"#00c7d4\" />\n<path d=\"m112.73 67.211c-6.9035 7.076-20.559 10.355-48.721-3.2058 9.8525 22.046 22.803 29.771 26.511 25.972z\" fill=\"#11e1ee\" />\n<path d=\"m1.0017 2.5495 62.332 60.807a1.124 1.124 0 0 0 1.4368 0.1359c5.1625-3.6998 6.0578-10.521 9.5268-13.05 10.275-7.4903 16.092-9.3909 15.731-12.61a0.99022 0.99022 0 0 0-0.3085-0.58463l-22.518-21.966c-12.944-12.638-41.475-14.454-65.367-14.782a1.1908 1.1908 0 0 0-0.83273 2.0495z\" fill=\"#e43921\" />\n<path d=\"m67.212 15.284c7.076 6.9035 10.355 20.559-3.2058 48.721 22.046-9.8525 29.771-22.805 25.972-26.511z\" fill=\"#ff7557\" />\n<path d=\"m15.279 60.8c6.9035-7.076 20.559-10.355 48.721 3.2058-9.8525-22.046-22.803-29.771-26.511-25.972z\" fill=\"#0cb6ff\" />\n<circle cx=\"64.009\" cy=\"63.995\" r=\"2.7182\" fill=\"#4a4848\" />\n"});

const AWSLogo = createSvgComponent({"meta":{"src":"/_astro/AWS-logo.D-HJMglE.svg","width":128,"height":128,"format":"svg"},"attributes":{"viewBox":"0 0 128 128"},"children":"\n\t<path fill=\"#252f3e\" d=\"M36.379 53.64c0 1.56.168 2.825.465 3.75.336.926.758 1.938 1.347 3.032.207.336.293.672.293.969 0 .418-.254.84-.8 1.261l-2.653 1.77c-.379.25-.758.379-1.093.379-.422 0-.844-.211-1.266-.59a13.28 13.28 0 0 1-1.516-1.98 34.153 34.153 0 0 1-1.304-2.485c-3.282 3.875-7.41 5.813-12.38 5.813-3.535 0-6.355-1.012-8.421-3.032-2.063-2.023-3.114-4.718-3.114-8.086 0-3.578 1.262-6.484 3.833-8.671 2.566-2.192 5.976-3.286 10.316-3.286 1.43 0 2.902.125 4.46.336 1.56.211 3.161.547 4.845.926v-3.074c0-3.2-.676-5.43-1.98-6.734C26.061 32.633 23.788 32 20.546 32c-1.473 0-2.988.168-4.547.547a33.416 33.416 0 0 0-4.547 1.433c-.676.293-1.18.461-1.473.547-.296.082-.507.125-.675.125-.59 0-.883-.422-.883-1.304v-2.063c0-.676.082-1.18.293-1.476.21-.293.59-.586 1.18-.883 1.472-.758 3.242-1.39 5.304-1.895 2.063-.547 4.254-.8 6.57-.8 5.008 0 8.672 1.136 11.032 3.41 2.316 2.273 3.492 5.726 3.492 10.359v13.64Zm-17.094 6.403c1.387 0 2.82-.254 4.336-.758 1.516-.508 2.863-1.433 4-2.695.672-.8 1.18-1.684 1.43-2.695.254-1.012.422-2.23.422-3.665v-1.765a34.401 34.401 0 0 0-3.871-.719 31.816 31.816 0 0 0-3.961-.25c-2.82 0-4.883.547-6.274 1.684-1.387 1.136-2.062 2.734-2.062 4.84 0 1.98.504 3.453 1.558 4.464 1.012 1.051 2.485 1.559 4.422 1.559Zm33.809 4.547c-.758 0-1.262-.125-1.598-.422-.34-.254-.633-.84-.887-1.64L40.715 29.98c-.25-.843-.38-1.39-.38-1.687 0-.672.337-1.05 1.013-1.05h4.125c.8 0 1.347.124 1.644.421.336.25.59.84.84 1.64l7.074 27.876 6.57-27.875c.208-.84.462-1.39.797-1.64.34-.255.93-.423 1.688-.423h3.367c.8 0 1.348.125 1.684.422.336.25.633.84.8 1.64l6.653 28.212 7.285-28.211c.25-.84.547-1.39.84-1.64.336-.255.887-.423 1.644-.423h3.914c.676 0 1.055.336 1.055 1.051 0 .21-.043.422-.086.676-.043.254-.125.59-.293 1.05L80.801 62.57c-.254.84-.547 1.387-.887 1.64-.336.255-.883.423-1.598.423h-3.62c-.801 0-1.348-.13-1.684-.422-.34-.297-.633-.844-.801-1.684l-6.527-27.16-6.485 27.117c-.21.844-.46 1.391-.8 1.684-.337.297-.926.422-1.684.422Zm54.105 1.137c-2.187 0-4.379-.254-6.484-.758-2.106-.504-3.746-1.055-4.84-1.684-.676-.379-1.137-.8-1.305-1.18a2.919 2.919 0 0 1-.254-1.18v-2.148c0-.882.336-1.304.97-1.304.25 0 .503.043.757.129.25.082.629.25 1.05.418a23.102 23.102 0 0 0 4.634 1.476c1.683.336 3.324.504 5.011.504 2.653 0 4.715-.465 6.145-1.39 1.433-.926 2.191-2.274 2.191-4 0-1.18-.379-2.145-1.136-2.946-.758-.8-2.192-1.516-4.254-2.191l-6.106-1.895c-3.074-.969-5.348-2.398-6.734-4.293-1.39-1.855-2.106-3.918-2.106-6.105 0-1.77.38-3.328 1.137-4.676a10.829 10.829 0 0 1 3.031-3.453c1.262-.965 2.696-1.684 4.38-2.188 1.683-.504 3.452-.715 5.304-.715.926 0 1.894.043 2.82.168.969.125 1.852.293 2.738.461.84.211 1.641.422 2.399.676.758.254 1.348.504 1.77.758.59.336 1.011.672 1.261 1.05.254.34.379.802.379 1.391v1.98c0 .884-.336 1.348-.969 1.348-.336 0-.883-.171-1.597-.507-2.403-1.094-5.098-1.641-8.086-1.641-2.399 0-4.293.379-5.598 1.18-1.309.797-1.98 2.02-1.98 3.746 0 1.18.421 2.191 1.261 2.988.844.8 2.403 1.602 4.633 2.316l5.98 1.895c3.032.969 5.22 2.316 6.524 4.043 1.305 1.727 1.938 3.707 1.938 5.895 0 1.812-.38 3.453-1.094 4.882-.758 1.434-1.77 2.696-3.074 3.707-1.305 1.051-2.864 1.809-4.672 2.36-1.895.586-3.875.883-6.024.883Zm0 0\" />\n\t<path fill=\"#f90\" d=\"M118 73.348c-4.432.063-9.664 1.052-13.621 3.832-1.223.883-1.012 2.062.336 1.894 4.508-.547 14.44-1.726 16.21.547 1.77 2.23-1.976 11.62-3.663 15.79-.504 1.26.59 1.769 1.726.8 7.41-6.231 9.348-19.242 7.832-21.137-.757-.925-4.388-1.79-8.82-1.726zM1.63 75.859c-.927.116-1.347 1.236-.368 2.121 16.508 14.902 38.359 23.872 62.613 23.872 17.305 0 37.43-5.43 51.281-15.66 2.273-1.688.297-4.254-2.02-3.204-15.534 6.57-32.421 9.77-47.788 9.77-22.778 0-44.8-6.273-62.653-16.633-.39-.231-.755-.304-1.064-.266z\" />\n"});

const certifications = [
  { id: "AWS Cloud Practitioner CLFC02", code: "CLF-C02", title: "AWS Cloud Practitioner ", description: "AWS Cloud Foundations Certification: Validates basic AWS knowledge, cloud fluency, and the ability to identify key AWS services needed for cloud projects.", logo: AWSLogo },
  { id: "Airflow DAG Authoring", code: "DAG-Authoring", title: "Apache Airflow DAG Authoring", description: "Astronomer Apache Airflow DAG Authoring Certification: Validates the ability to design, configure, and manage reliable Airflow DAGs using best practices, appropriate operators, and effective task settings for daily workflow management.", logo: AirflowLogo },
  { id: "Airflow Fundamentals", code: "Airflow Fundamentals", title: "Apache Airflow Fundamentals", description: "Astronomer Apache Airflow Fundamentals Certification: Validates the ability to create, manage, and monitor DAGs effectively, understand Airflow components and task lifecycles, use the UI for debugging, and build pipelines following best practices.", logo: AirflowLogo }
];

const __vite_glob_0_0 = "/_astro/AWSCloudPractitionerCLFC02-badge.Bf_gp8J8.png";

const __vite_glob_0_1 = "/_astro/AirflowDAGAuthoring-badge.D4lHWMG_.png";

const __vite_glob_0_2 = "/_astro/AirflowFundamentals-badge.bTswMklX.png";

const modules = /* #__PURE__ */ Object.assign({"../assets/badges/AWSCloudPractitionerCLFC02-badge.png": __vite_glob_0_0,"../assets/badges/AirflowDAGAuthoring-badge.png": __vite_glob_0_1,"../assets/badges/AirflowFundamentals-badge.png": __vite_glob_0_2



});
function toNiceName(filePath) {
  const base = filePath.split("/").pop() || "";
  const withoutExt = base.replace(/\.[^.]+$/, "");
  const withoutBadge = withoutExt.replace(/-?badg?e?$/i, "");
  const normalized = withoutBadge.replace(/[_-]+/g, " ");
  const spaced = normalized.replace(/([a-z])([A-Z])|([A-Z]+)([A-Z][a-z])/g, "$1$3 $2$4");
  const trimmed = spaced.trim().replace(/\s{2,}/g, " ");
  return trimmed.replace(/\b\w/g, (m) => m.toUpperCase());
}
const badgeUrls = {
  "AWS Cloud Practitioner CLFC02": "https://www.credly.com/badges/95583c83-15a0-4da4-8124-568f33757c78/linked_in_profile",
  "Airflow DAG Authoring": "https://www.credly.com/badges/e8161f22-c99f-40d3-aa1b-0f01971c8af8/linked_in_profile",
  "Airflow Fundamentals": "https://www.credly.com/badges/2633ba79-a94d-4ceb-85a6-912d665dad4a/linked_in_profile"
};
const badges = Object.entries(modules).map(([path, url]) => {
  const name = toNiceName(path);
  return { name, badge: url, url: badgeUrls[name] || "#" };
}).sort((a, b) => b.name.localeCompare(a.name));

const CambridgeLogo = new Proxy({"src":"/_astro/Cambridge-logo.CSXXESGD.png","width":320,"height":320,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/assets/images/Cambridge-logo.png";
							}
							
							return target[name];
						}
					});

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$5 = createAstro("https://example.com");
const $$Certification = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Certification;
  const { title } = Astro2.props;
  const badgesList = badges.map((b) => ({ name: b.name, badge: b.badge, url: b.url }));
  const certificationsData = certifications.map((c) => ({
    ...c
  }));
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="flex flex-col gap-12 shadow-m"> <!-- Secci\xF3n de Certificaciones --> <div class="certifications-section"> <!-- Medallas en l\xEDnea horizontal --> <div class="flex flex-wrap justify-center gap-6"> ', ' </div> <!-- Card de informaci\xF3n din\xE1mica --> <div class="mt-8 certification-info-card grid grid-cols-1 gap-6 md:grid-cols-1" data-aos="fade-up" data-aos-delay="400"> <div class="card-surface p-4 md:p-6 w-full min-w-0 min-h-50" id="active-cert-card"> <div class="flex justify-between items-center"> <div> <span class="text-md font-semibold learning-title rounded-full px-3 py-1" style="background: rgba(var(--accent-rgb),0.1); color: var(--accent); border: 1px solid rgba(var(--accent-rgb),0.3);">', '</span> <h4 class="mt-2 text-xl font-semibold pt-5">', '</h4> <p class="mt-1 text-gray-600 text-sm">', '</p> </div> <div class="ml-4 w-10 h-10 flex items-center"> <img', "", ' class="w-10 h-10"> </div> </div> </div> </div> <!-- DE MOMENTO DEJAR, YA VERE QUE HACER --> <div class="languages-section pt-8"> <h3 class="text-2xl font-bold text-center mb-6"> <span class="text-gradient">Languages</span> </h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 languages-grid pt-5"> <!-- B2 First --> <div class="card-surface p-4 md:p-6 w-full min-w-0" data-aos="fade-up" data-aos-delay="800"> <div class="flex items-center gap-4"> ', ` <div> <h4 class="text-md font-semibold learning-title">B2 First</h4> <p class="text-sm text-gray-600 learning-provider">Cambridge English</p> <div class="mt-1"> <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style="background: rgba(var(--accent-rgb),0.1); color: var(--accent); border: 1px solid rgba(var(--accent-rgb),0.3);">English</span> </div> </div> </div> </div> </div> </div> </div> </div> <script type="module">
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth <= 768;
  const badgeWrappers = document.querySelectorAll('.cert-image-wrapper');
  const infoCard = document.getElementById('active-cert-card');

  badgeWrappers.forEach((htmlElement) => {
    if (!isMobile) {
      htmlElement.addEventListener('mouseenter', () => {
        htmlElement.style.transition = 'transform 0.2s ease, filter 0.2s ease';
        htmlElement.style.cursor = 'pointer';
        htmlElement.style.filter = 'drop-shadow(0 5px 10px rgba(0, 0, 0, 0.4))';

        if (infoCard) {
          const certData = JSON.parse(htmlElement.dataset.certJson || '{}');
          infoCard.style.transition = 'opacity 0.2s ease';
          infoCard.style.opacity = '0';

          setTimeout(() => {
            const codeEl = infoCard.querySelector('.learning-title');
            const titleEl = infoCard.querySelector('h4');
            const descEl = infoCard.querySelector('p');
            const imgEl = infoCard.querySelector('img');

            if (codeEl) codeEl.textContent = certData.code;
            if (titleEl) titleEl.textContent = certData.title;
            if (descEl) descEl.textContent = certData.description;
            if (imgEl) imgEl.src = certData.logo?.src;

            infoCard.style.opacity = '1';
          }, 200);
        }
      });

      htmlElement.addEventListener('mousemove', (e) => {
        const rect = htmlElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / (rect.width / 2);
        const deltaY = (e.clientY - centerY) / (rect.height / 2);

        const maxRotation = 35;
        const scaleFactor = 1.15;
        const rotateX = Math.max(-maxRotation, Math.min(maxRotation, deltaY * maxRotation));
        const rotateY = Math.max(-maxRotation, Math.min(maxRotation, -deltaX * maxRotation));

        htmlElement.style.transform = \`scale(\${scaleFactor}) perspective(600px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg)\`;
      });

      htmlElement.addEventListener('mouseleave', () => {
        htmlElement.style.transform = 'scale(1) perspective(600px) rotateX(0deg) rotateY(0deg)';
        htmlElement.style.filter = '';
      });
    }

    htmlElement.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const currentTransform = htmlElement.style.transform || '';
      htmlElement.style.transition = 'transform 0.1s ease';
      htmlElement.style.transform = \`\${currentTransform} scale(0.95)\`;

      setTimeout(() => {
        htmlElement.style.transform = !isMobile
          ? 'scale(1.15) perspective(600px) rotateX(0deg) rotateY(0deg)'
          : 'scale(1)';

        const url = htmlElement.dataset.url;
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
      }, 100);
    });
  });
});
<\/script>`], ["", '<div class="flex flex-col gap-12 shadow-m"> <!-- Secci\xF3n de Certificaciones --> <div class="certifications-section"> <!-- Medallas en l\xEDnea horizontal --> <div class="flex flex-wrap justify-center gap-6"> ', ' </div> <!-- Card de informaci\xF3n din\xE1mica --> <div class="mt-8 certification-info-card grid grid-cols-1 gap-6 md:grid-cols-1" data-aos="fade-up" data-aos-delay="400"> <div class="card-surface p-4 md:p-6 w-full min-w-0 min-h-50" id="active-cert-card"> <div class="flex justify-between items-center"> <div> <span class="text-md font-semibold learning-title rounded-full px-3 py-1" style="background: rgba(var(--accent-rgb),0.1); color: var(--accent); border: 1px solid rgba(var(--accent-rgb),0.3);">', '</span> <h4 class="mt-2 text-xl font-semibold pt-5">', '</h4> <p class="mt-1 text-gray-600 text-sm">', '</p> </div> <div class="ml-4 w-10 h-10 flex items-center"> <img', "", ' class="w-10 h-10"> </div> </div> </div> </div> <!-- DE MOMENTO DEJAR, YA VERE QUE HACER --> <div class="languages-section pt-8"> <h3 class="text-2xl font-bold text-center mb-6"> <span class="text-gradient">Languages</span> </h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 languages-grid pt-5"> <!-- B2 First --> <div class="card-surface p-4 md:p-6 w-full min-w-0" data-aos="fade-up" data-aos-delay="800"> <div class="flex items-center gap-4"> ', ` <div> <h4 class="text-md font-semibold learning-title">B2 First</h4> <p class="text-sm text-gray-600 learning-provider">Cambridge English</p> <div class="mt-1"> <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style="background: rgba(var(--accent-rgb),0.1); color: var(--accent); border: 1px solid rgba(var(--accent-rgb),0.3);">English</span> </div> </div> </div> </div> </div> </div> </div> </div> <script type="module">
document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.innerWidth <= 768;
  const badgeWrappers = document.querySelectorAll('.cert-image-wrapper');
  const infoCard = document.getElementById('active-cert-card');

  badgeWrappers.forEach((htmlElement) => {
    if (!isMobile) {
      htmlElement.addEventListener('mouseenter', () => {
        htmlElement.style.transition = 'transform 0.2s ease, filter 0.2s ease';
        htmlElement.style.cursor = 'pointer';
        htmlElement.style.filter = 'drop-shadow(0 5px 10px rgba(0, 0, 0, 0.4))';

        if (infoCard) {
          const certData = JSON.parse(htmlElement.dataset.certJson || '{}');
          infoCard.style.transition = 'opacity 0.2s ease';
          infoCard.style.opacity = '0';

          setTimeout(() => {
            const codeEl = infoCard.querySelector('.learning-title');
            const titleEl = infoCard.querySelector('h4');
            const descEl = infoCard.querySelector('p');
            const imgEl = infoCard.querySelector('img');

            if (codeEl) codeEl.textContent = certData.code;
            if (titleEl) titleEl.textContent = certData.title;
            if (descEl) descEl.textContent = certData.description;
            if (imgEl) imgEl.src = certData.logo?.src;

            infoCard.style.opacity = '1';
          }, 200);
        }
      });

      htmlElement.addEventListener('mousemove', (e) => {
        const rect = htmlElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) / (rect.width / 2);
        const deltaY = (e.clientY - centerY) / (rect.height / 2);

        const maxRotation = 35;
        const scaleFactor = 1.15;
        const rotateX = Math.max(-maxRotation, Math.min(maxRotation, deltaY * maxRotation));
        const rotateY = Math.max(-maxRotation, Math.min(maxRotation, -deltaX * maxRotation));

        htmlElement.style.transform = \\\`scale(\\\${scaleFactor}) perspective(600px) rotateX(\\\${rotateX}deg) rotateY(\\\${rotateY}deg)\\\`;
      });

      htmlElement.addEventListener('mouseleave', () => {
        htmlElement.style.transform = 'scale(1) perspective(600px) rotateX(0deg) rotateY(0deg)';
        htmlElement.style.filter = '';
      });
    }

    htmlElement.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const currentTransform = htmlElement.style.transform || '';
      htmlElement.style.transition = 'transform 0.1s ease';
      htmlElement.style.transform = \\\`\\\${currentTransform} scale(0.95)\\\`;

      setTimeout(() => {
        htmlElement.style.transform = !isMobile
          ? 'scale(1.15) perspective(600px) rotateX(0deg) rotateY(0deg)'
          : 'scale(1)';

        const url = htmlElement.dataset.url;
        if (url) window.open(url, '_blank', 'noopener,noreferrer');
      }, 100);
    });
  });
});
<\/script>`])), maybeRenderHead(), badgesList.map((badge) => {
    const cert = certificationsData.find((c) => c.code === badge.name || c.id === badge.name);
    return renderTemplate`<div class="flex flex-col items-center justify-center px-4 py-6 min-w-[120px] md:min-w-[140px] rounded-lg cursor-pointer"> <div class="cert-image-wrapper w-50 h-50 mb-2 flex items-center justify-center bg-none p-4 rounded-xl border-none transition-transform"${addAttribute(JSON.stringify(cert), "data-cert-json")}${addAttribute(badge.url, "data-url")}> <img${addAttribute(badge.badge, "src")}${addAttribute(badge.name, "alt")} class="w-full h-full object-contain"> </div> <span class="text-sm font-semibold text-center text-[color:var(--color-text-muted)]">${badge.name}</span> </div>`;
  }), certificationsData[0].code, certificationsData[0].title, certificationsData[0].description, addAttribute(certificationsData[0].logo?.src, "src"), addAttribute(certificationsData[0].title, "alt"), renderComponent($$result, "Image", $$Image, { "src": CambridgeLogo, "alt": "Cambridge English", "class": "w-14 h-14" }));
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/certification/Certification.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const $$Certificactions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Certificactions;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="certifications" class="w-full py-10 scroll-mt-16"> <div class="mx-auto max-w-6xl px-4"> ${title && renderTemplate`<h2 class="text-3xl md:text-4xl font-semibold text-center mb-6 text-foreground">${title}</h2>`} <div class="mb-6"> ${renderComponent($$result, "Certification", $$Certification, {})} </div> </div> </section>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/sections/Certificactions.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$ArrowSeparator = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ArrowSeparator;
  const { size = 28, class: className } = Astro2.props;
  const dimension = typeof size === "number" ? `${size}` : String(size);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["sw-separator-arrow", className].filter(Boolean).join(" "), "class")}> <svg class="sw-chevron"${addAttribute(dimension, "width")}${addAttribute(dimension, "height")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <span class="sr-only">Scroll down</span> </div>`;
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/components/ui/separator/ArrowSeparator.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-theme="dark" class="dark scroll-smooth"> <head>', '<!-- JSON-LD: Organization --><script type="application/ld+json">', "<\/script>", "</head> <body> ", " <main> ", ' <section class="py-6"> ', " ", " ", " ", " ", " ", " ", " ", " ", " </section> ", " ", " </main> ", " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Site Author",
    url: new URL("/", Astro2.site).toString(),
    logo: new URL("/favicon.svg", Astro2.site).toString(),
    sameAs: [
      "https://github.com/alvarocp4/Portfolio-Data-Consultant",
      "https://www.linkedin.com/in/alvarocarmonapedrajas-bd-da-bi/"
    ]
  })), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "HeroSection", $$HeroSection, { "title": "Alvaro Carmona - Portfolio", "subtitle": "Data Engineer | Data Consultant", "showCTA": true, "primaryCTA": { text: "View Experience", href: "/#experience" }, "secondaryCTA": { text: "View Projects", href: "/#projects" } }), renderComponent($$result, "ArrowSeparator", $$ArrowSeparator, {}), renderComponent($$result, "SkillsSection", $$SkillsSection, { "title": "Skills & Tools" }), renderComponent($$result, "ArrowSeparator", $$ArrowSeparator, {}), renderComponent($$result, "WorkExperience", $$WorkExperience, { "title": "Work Experience", "items": work }), renderComponent($$result, "ArrowSeparator", $$ArrowSeparator, {}), renderComponent($$result, "PorjectS", $$Projects, { "title": "Projects" }), renderComponent($$result, "ArrowSeparator", $$ArrowSeparator, {}), renderComponent($$result, "Certifiacations", $$Certificactions, { "title": "Certifications" }), renderComponent($$result, "GlowLineSeparator", $$GlowLineSeparator, {}), renderComponent($$result, "SpeedInsights", $$Index$2, {}), renderComponent($$result, "Analytics", $$Index$1, {}), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/index.astro", void 0);

const $$file = "C:/Users/carmo/Desktop/Streamlit/ETL/portfolio-data-consultant/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
