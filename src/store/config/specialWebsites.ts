import { config as _config } from '@apad/setting-panel'
import { t } from '@root/utils/i18n'

const category = t('settingPanel.specialWebsites')
const config: typeof _config = (props) => ({ ...props, category })

const config_specialWebsites = {
  biliVideoDansFromBiliEvolved: config({
    defaultValue: false,
    label: t('settingPanel.biliVideoDansFromBiliEvolved'),
    desc: t('settingPanel.biliVideoDansFromBiliEvolvedDesc'),
  }),
  biliVideoPakkuFilter: config({
    defaultValue: true,
    label: t('settingPanel.biliVideoPakkuFilter'),
    desc: t('settingPanel.biliVideoPakkuFilterDesc'),
    relateBy: 'biliVideoDansFromBiliEvolved',
    relateByValue: true,
  }),

  youtube_mergeSubtitleAtSimilarTimes: config({
    defaultValue: true,
    label: t('settingPanel.youtube_mergeSubtitleAtSimilarTimes'),
  }),
  // biliLiveSide: config({
  //   defaultValue: false,
  //   label: t('settingPanel.biliLiveSide'),
  //   desc: t('settingPanel.biliLiveSideDesc'),
  // }),
}

export default config_specialWebsites
