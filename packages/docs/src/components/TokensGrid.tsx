import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  hasExampleFonts?: boolean
}
export function TokensGrid({
  tokens,
  hasRemValue = false,
  hasExampleFonts = false,
}: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {hasExampleFonts && <th>Example</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>
                {value?.replace(
                  /rem|px|vw|vh/gi,
                  ` ${value?.replace(/\d|\.|,/g, '')}`,
                )}
              </td>
              {hasRemValue && (
                <td>{Number(value?.replace(/rem|px|vw|vh/gi, '')) * 16} px</td>
              )}
              {hasExampleFonts && (
                <td
                  style={(() => {
                    const styleFonts = {
                      fontFamily: 'sans-serif',
                      fontWeight: '400',
                    }
                    if (key.match(/default|code/)) {
                      styleFonts.fontFamily = value
                    }
                    if (key.match(/regular|medium|bold/)) {
                      styleFonts.fontWeight = value
                    }
                    return { ...styleFonts }
                  })()}
                >
                  Design System
                </td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
