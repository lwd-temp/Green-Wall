import themes from '../themes'
import type { Theme } from '../types'

interface ThemeSelectorProps {
  onChange?: (theme: Theme) => void
}

export default function ThemeSelector(props: ThemeSelectorProps) {
  return (
    <div className="flex gap-3">
      {themes.map((theme) => {
        return (
          <div
            key={theme.name}
            className="grid h-5 w-5 cursor-pointer grid-cols-2 grid-rows-2"
            title={theme.name}
            onClick={() => props.onChange?.(theme)}
          >
            <span style={{ backgroundColor: theme.levelColors[1] }} />
            <span style={{ backgroundColor: theme.levelColors[2] }} />
            <span style={{ backgroundColor: theme.levelColors[3] }} />
            <span style={{ backgroundColor: theme.levelColors[4] }} />
          </div>
        )
      })}
    </div>
  )
}
