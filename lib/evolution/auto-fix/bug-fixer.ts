// lib/evolution/auto-fix/bug-fixer.ts
/**
 * Автоматическое исправление распространенных багов
 * Использует паттерн-матчинг для идентификации и исправления проблем
 */

export interface BugPattern {
  id: string
  name: string
  pattern: RegExp
  severity: 'low' | 'medium' | 'high' | 'critical'
  fix: (code: string) => string
  description: string
}

export class AutoBugFixer {
  private bugPatterns: BugPattern[] = []

  constructor() {
    this.initializeBugPatterns()
  }

  private initializeBugPatterns(): void {
    this.bugPatterns = [
      {
        id: 'missing-alt',
        name: 'Отсутствие alt атрибутов у изображений',
        pattern: /<img(?!.*alt=)/g,
        severity: 'medium',
        description: 'Изображения без alt атрибутов нарушают accessibility',
        fix: (code: string) => {
          return code.replace(/<img([^>]*?)(?:\s+alt\s*=\s*["'][^"']*["'])?([^>]*?)>/g, (match, before, after) => {
            if (!match.includes('alt=')) {
              return `<img${before} alt=""${after}>`
            }
            return match
          })
        },
      },
      {
        id: 'missing-aria-label',
        name: 'Кнопки без aria-label',
        pattern: /<button([^>]*?)(?!.*aria-label)(?!.*>.*<\/button>)/g,
        severity: 'low',
        description: 'Иконки-кнопки должны иметь aria-label',
        fix: (code: string) => {
          // Это более сложный паттерн, требует контекста
          return code
        },
      },
      {
        id: 'console-log',
        name: 'Console.log в продакшене',
        pattern: /console\.(log|debug|info)\(/g,
        severity: 'low',
        description: 'Console.log должен быть удален в продакшене',
        fix: (code: string) => {
          return code.replace(/console\.(log|debug|info)\([^)]*\);?/g, '')
        },
      },
      {
        id: 'missing-key',
        name: 'Отсутствие key в списках React',
        pattern: /\.map\([^)]*\)\s*=>\s*\(/g,
        severity: 'medium',
        description: 'Элементы списков должны иметь уникальные key',
        fix: (code: string) => {
          // Требует более сложного анализа AST
          return code
        },
      },
      {
        id: 'inline-styles',
        name: 'Избыточное использование inline стилей',
        pattern: /style\s*=\s*{[\s\S]*?}/g,
        severity: 'low',
        description: 'Inline стили должны быть вынесены в CSS классы',
        fix: (code: string) => {
          // Требует ручного рефакторинга
          return code
        },
      },
      {
        id: 'memory-leak',
        name: 'Потенциальная утечка памяти',
        pattern: /addEventListener\([^,]+,\s*function[^)]*\)/g,
        severity: 'high',
        description: 'Event listeners должны быть удалены в cleanup',
        fix: (code: string) => {
          // Добавляет комментарий о необходимости cleanup
          return code.replace(
            /addEventListener\(([^,]+),\s*function[^)]*\)/g,
            'addEventListener($1, function /* TODO: Remember to removeEventListener in cleanup */'
          )
        },
      },
      {
        id: 'layout-thrashing',
        name: 'Потенциальный layout thrashing',
        pattern: /(offsetWidth|offsetHeight|clientWidth|clientHeight|scrollWidth|scrollHeight)/g,
        severity: 'medium',
        description: 'Множественные чтения layout свойств вызывают reflow',
        fix: (code: string) => {
          // Добавляет предупреждение
          return code.replace(
            /(offsetWidth|offsetHeight|clientWidth|clientHeight|scrollWidth|scrollHeight)/g,
            '/* Warning: potential layout thrashing - batch reads */ $1'
          )
        },
      },
      {
        id: 'z-index-conflict',
        name: 'Потенциальные конфликты z-index',
        pattern: /z-index\s*:\s*(\d+);/g,
        severity: 'low',
        description: 'Z-index должен использовать систему дизайн-токенов',
        fix: (code: string) => {
          // Добавляет комментарий о необходимости использования токенов
          return code.replace(
            /z-index\s*:\s*(\d+);/g,
            'z-index: $1; /* Consider using design system z-index tokens */'
          )
        },
      },
    ]
  }

  /**
   * Сканирует код и исправляет найденные баги
   */
  scanAndFix(code: string, filePath: string): {
    fixed: boolean
    fixes: string[]
    warnings: string[]
    fixedCode: string
  } {
    const fixes: string[] = []
    const warnings: string[] = []
    let fixedCode = code

    this.bugPatterns.forEach((pattern) => {
      if (pattern.pattern.test(code)) {
        const beforeFix = fixedCode
        fixedCode = pattern.fix(fixedCode)

        if (beforeFix !== fixedCode) {
          fixes.push(`${pattern.name} (${pattern.severity})`)
        } else {
          warnings.push(`${pattern.name} - требует ручного исправления`)
        }
      }
    })

    return {
      fixed: fixes.length > 0,
      fixes,
      warnings,
      fixedCode,
    }
  }

  /**
   * Получить список всех известных паттернов багов
   */
  getBugPatterns(): BugPattern[] {
    return this.bugPatterns
  }

  /**
   * Добавить новый паттерн бага
   */
  addBugPattern(pattern: BugPattern): void {
    this.bugPatterns.push(pattern)
  }
}

