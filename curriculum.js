window.COURSE_DATA = {
  "courseTitle": "Python Mastery — Zero to Production",
  "version": "2026.08",
  "pythonTarget": "Python 3.14",
  "totalLessons": 125,
  "levels": [
    {
      "id": "L0",
      "title": "Level 0 — סביבת עבודה ויסודות",
      "difficulty": "Beginner",
      "desc": "מה זה Python, התקנה, terminal, venv, pip, IDE, Git והרצה נכונה.",
      "lessons": [
        {
          "id": "lesson-1",
          "title": "איך Python עובד",
          "concepts": "Interpreter, CPython, source code, bytecode, runtime, REPL",
          "example": "print('Hello, Python!')",
          "exercise": "הסבר במילים שלך מה קורה מהרגע שאתה מריץ python app.py ועד שהקוד מתחיל לעבוד.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: Interpreter, CPython, source code, bytecode, runtime, REPL.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם איך Python עובד בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של איך Python עובד?",
              "a": "להבין וליישם נכון את: Interpreter, CPython, source code, bytecode, runtime, REPL."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Python היא שפה, ו-CPython הוא המימוש הנפוץ שמריץ אותה. קוד מקור עובר parsing, הופך ל-bytecode פנימי ואז מורץ על ידי ה-Python Virtual Machine.",
          "deep": [
            "קובץ .py הוא קוד מקור ולא קוד מכונה.",
            "SyntaxError מתרחשת לפני ריצה תקינה של הקוד, בעוד חריגות אחרות יכולות לקרות בזמן runtime.",
            "הבנת interpreter, bytecode ו-runtime עוזרת להבין imports, performance ו-debugging."
          ],
          "mistakes": [
            "לחשוב ש-Python לעולם לא עוברת שלב קומפילציה פנימי.",
            "להתבלבל בין Python כשפה לבין CPython כמימוש."
          ],
          "starter": "name = 'Python'\nversion = 3.14\nprint(name, version)",
          "challenge": "הרץ קובץ שמדפיס __name__, ואז ייבא אותו מקובץ אחר והסבר למה הערך משתנה.",
          "objectives": [
            "להסביר מהו איך Python עובד במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא איך Python עובד.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-2",
          "title": "התקנה וגרסאות",
          "concepts": "Python 3.14, python --version, PATH, Windows/macOS/Linux",
          "example": "python --version",
          "exercise": "בדוק את גרסת Python שלך והסבר מה ההבדל בין python לבין py ב-Windows.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: Python 3.14, python --version, PATH, Windows/macOS/Linux.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם התקנה וגרסאות בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של התקנה וגרסאות?",
              "a": "להבין וליישם נכון את: Python 3.14, python --version, PATH, Windows/macOS/Linux."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "התקנה וגרסאות הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: Python 3.14, python --version, PATH, Windows/macOS/Linux.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "python --version",
          "challenge": "בדוק את גרסת Python שלך והסבר מה ההבדל בין python לבין py ב-Windows.",
          "objectives": [
            "להסביר מהו התקנה וגרסאות במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא התקנה וגרסאות.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-3",
          "title": "Terminal ופקודות בסיס",
          "concepts": "pwd/cd/ls, mkdir, files, running scripts",
          "example": "python main.py",
          "exercise": "צור תיקייה חדשה, קובץ main.py והריץ אותו מהטרמינל.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: pwd/cd/ls, mkdir, files, running scripts.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Terminal ופקודות בסיס בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Terminal ופקודות בסיס?",
              "a": "להבין וליישם נכון את: pwd/cd/ls, mkdir, files, running scripts."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Terminal ופקודות בסיס הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: pwd/cd/ls, mkdir, files, running scripts.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "python main.py",
          "challenge": "צור תיקייה חדשה, קובץ main.py והריץ אותו מהטרמינל.",
          "objectives": [
            "להסביר מהו Terminal ופקודות בסיס במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Terminal ופקודות בסיס.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-4",
          "title": "Virtual Environments",
          "concepts": "venv, activation, isolation, requirements",
          "example": "python -m venv .venv",
          "exercise": "צור venv, התקן package, הפק requirements.txt.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: venv, activation, isolation, requirements.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Virtual Environments בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Virtual Environments?",
              "a": "להבין וליישם נכון את: venv, activation, isolation, requirements."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Virtual Environments הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: venv, activation, isolation, requirements.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "python -m venv .venv",
          "challenge": "צור venv, התקן package, הפק requirements.txt.",
          "objectives": [
            "להסביר מהו Virtual Environments במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Virtual Environments.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-5",
          "title": "pip ו-Packages",
          "concepts": "PyPI, install/uninstall/list/freeze, dependency pinning",
          "example": "python -m pip install requests",
          "exercise": "התקן requests ובדוק את הגרסה שהותקנה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: PyPI, install/uninstall/list/freeze, dependency pinning.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם pip ו-Packages בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של pip ו-Packages?",
              "a": "להבין וליישם נכון את: PyPI, install/uninstall/list/freeze, dependency pinning."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "pip ו-Packages הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: PyPI, install/uninstall/list/freeze, dependency pinning.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "python -m pip install requests",
          "challenge": "התקן requests ובדוק את הגרסה שהותקנה.",
          "objectives": [
            "להסביר מהו pip ו-Packages במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא pip ו-Packages.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-6",
          "title": "VS Code / PyCharm",
          "concepts": "interpreter selection, debugger, breakpoints, formatting",
          "example": "breakpoint()",
          "exercise": "הפעל breakpoint ובדוק ערך של משתנה בזמן ריצה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: interpreter selection, debugger, breakpoints, formatting.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם VS Code / PyCharm בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של VS Code / PyCharm?",
              "a": "להבין וליישם נכון את: interpreter selection, debugger, breakpoints, formatting."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "VS Code / PyCharm הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: interpreter selection, debugger, breakpoints, formatting.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "breakpoint()",
          "challenge": "הפעל breakpoint ובדוק ערך של משתנה בזמן ריצה.",
          "objectives": [
            "להסביר מהו VS Code / PyCharm במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא VS Code / PyCharm.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-7",
          "title": "Git למפתח Python",
          "concepts": "init, status, add, commit, branch, .gitignore",
          "example": "git status",
          "exercise": "צור repo עם .gitignore שמתעלם מ-.venv, __pycache__, .pytest_cache.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: init, status, add, commit, branch, .gitignore.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Git למפתח Python בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Git למפתח Python?",
              "a": "להבין וליישם נכון את: init, status, add, commit, branch, .gitignore."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Git למפתח Python הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: init, status, add, commit, branch, .gitignore.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "git status",
          "challenge": "צור repo עם .gitignore שמתעלם מ-.venv, __pycache__, .pytest_cache.",
          "objectives": [
            "להסביר מהו Git למפתח Python במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Git למפתח Python.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L1",
      "title": "Level 1 — Python Core",
      "difficulty": "Beginner",
      "desc": "תחביר, טיפוסים, אופרטורים, תנאים, לולאות וקלט/פלט.",
      "lessons": [
        {
          "id": "lesson-8",
          "title": "משתנים ושמות",
          "concepts": "assignment, naming, dynamic typing, identity",
          "example": "name = 'Itamar'\nage = 30",
          "exercise": "צור 5 משתנים מטיפוסים שונים והדפס גם type().",
          "theory": [
            "מטרת השיעור היא להבין לעומק: assignment, naming, dynamic typing, identity.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם משתנים ושמות בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של משתנים ושמות?",
              "a": "להבין וליישם נכון את: assignment, naming, dynamic typing, identity."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "ב-Python משתנה הוא שם שמצביע לאובייקט. הטיפוס שייך לאובייקט, לא לשם עצמו.",
          "deep": [
            "assignment יוצר binding בין שם לאובייקט.",
            "אותו שם יכול מאוחר יותר להצביע לאובייקט מסוג אחר.",
            "== בודק שוויון ערכים; is בודק זהות אובייקטים."
          ],
          "mistakes": [
            "שימוש ב-is במקום == להשוואת ערכים.",
            "דריסה של built-ins עם שמות כמו list, str או id."
          ],
          "starter": "name = 'Dana'\nage = 28\nis_active = True\nprint(f'{name} is {age}, active={is_active}')",
          "challenge": "צור שתי הפניות לאותה list, שנה דרך אחת מהן והסבר למה גם השנייה רואה את השינוי.",
          "objectives": [
            "להסביר מהו משתנים ושמות במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם ערך למשתנה age.",
            "code": "age = ____\nprint(age)",
            "answer": "30"
          }
        },
        {
          "id": "lesson-9",
          "title": "Numbers",
          "concepts": "int, float, complex, arithmetic, rounding",
          "example": "total = 10 + 3 * 2\nprint(total)",
          "exercise": "כתוב מחשבון מחיר כולל מע״מ והנחה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: int, float, complex, arithmetic, rounding.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Numbers בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Numbers?",
              "a": "להבין וליישם נכון את: int, float, complex, arithmetic, rounding."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "מספרים משמשים למחירים, אחוזים, זמנים, counters וסטטיסטיקה. חשוב במיוחד להבין את מגבלות float.",
          "deep": [
            "int ב-Python אינו מוגבל ל-32/64 ביט בצורה הרגילה כל עוד יש זיכרון.",
            "float מבוסס בדרך כלל IEEE-754 ולכן ערכים עשרוניים מסוימים אינם מיוצגים בדיוק.",
            "לכסף ולדיוק עשרוני גבוה אפשר לשקול Decimal."
          ],
          "mistakes": [
            "להניח ש-0.1 + 0.2 שווה בדיוק ל-0.3 בבינארי.",
            "להשתמש ב-int כדי לעגל במקום להבין שהוא חותך לכיוון אפס."
          ],
          "starter": "price = 120\nvat = 0.18\nfinal_price = price * (1 + vat)\nprint(round(final_price, 2))",
          "challenge": "בדוק 0.1 + 0.2 ואז השווה בעזרת math.isclose.",
          "objectives": [
            "להסביר מהו Numbers במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם אופרטור חזקה.",
            "code": "result = 2 ____ 5\nprint(result)",
            "answer": "**"
          }
        },
        {
          "id": "lesson-10",
          "title": "Strings",
          "concepts": "quotes, indexing, slicing, methods, immutability",
          "example": "name = 'Python'\nprint(name[0:3])",
          "exercise": "קבל שם מלא והדפס initials, אורך ושם באותיות גדולות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: quotes, indexing, slicing, methods, immutability.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Strings בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Strings?",
              "a": "להבין וליישם נכון את: quotes, indexing, slicing, methods, immutability."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "טקסט נמצא כמעט בכל מערכת: שמות, URLs, JSON, logs, קלט משתמש ונתונים.",
          "deep": [
            "str הוא immutable.",
            "indexing מתחיל ב-0 ואינדקס שלילי סופר מהסוף.",
            "slicing משתמש בצורה start:stop:step כאשר stop אינו כלול."
          ],
          "mistakes": [
            "לצפות שמתודה כמו replace תשנה string במקום.",
            "גישה לאינדקס שאינו קיים וגרימת IndexError."
          ],
          "starter": "language = 'Python'\nprint(language[:3])\nprint(language[-1])",
          "challenge": "קבל אימייל, נקה רווחים, המר ל-lowercase והפרד username ו-domain.",
          "objectives": [
            "להסביר מהו Strings במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "הדפס את שלוש האותיות הראשונות.",
            "code": "text = 'Python'\nprint(text[____])",
            "answer": "0:3"
          }
        },
        {
          "id": "lesson-11",
          "title": "f-strings",
          "concepts": "formatting, precision, alignment, expressions",
          "example": "price = 12.3456\nprint(f'{price:.2f}')",
          "exercise": "הדפס חשבונית מיושרת עם 3 מוצרים.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: formatting, precision, alignment, expressions.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם f-strings בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של f-strings?",
              "a": "להבין וליישם נכון את: formatting, precision, alignment, expressions."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "f-strings הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: formatting, precision, alignment, expressions.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "price = 12.3456\nprint(f'{price:.2f}')",
          "challenge": "הדפס חשבונית מיושרת עם 3 מוצרים.",
          "objectives": [
            "להסביר מהו f-strings במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא f-strings.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-12",
          "title": "Booleans ו-None",
          "concepts": "truthiness, comparisons, is vs ==",
          "example": "value = None\nprint(value is None)",
          "exercise": "כתוב תנאי שמבדיל בין None, מחרוזת ריקה וערך אמיתי.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: truthiness, comparisons, is vs ==.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Booleans ו-None בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Booleans ו-None?",
              "a": "להבין וליישם נכון את: truthiness, comparisons, is vs ==."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Booleans ו-None הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: truthiness, comparisons, is vs ==.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "value = None\nprint(value is None)",
          "challenge": "כתוב תנאי שמבדיל בין None, מחרוזת ריקה וערך אמיתי.",
          "objectives": [
            "להסביר מהו Booleans ו-None במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Booleans ו-None.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-13",
          "title": "if / elif / else",
          "concepts": "branching, nested conditions, guard clauses",
          "example": "score = 87\nprint('pass' if score >= 60 else 'fail')",
          "exercise": "כתוב פונקציה שמחזירה דרגת ציון A-F.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: branching, nested conditions, guard clauses.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם if / elif / else בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של if / elif / else?",
              "a": "להבין וליישם נכון את: branching, nested conditions, guard clauses."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "if / elif / else הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: branching, nested conditions, guard clauses.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "score = 87\nprint('pass' if score >= 60 else 'fail')",
          "challenge": "כתוב פונקציה שמחזירה דרגת ציון A-F.",
          "objectives": [
            "להסביר מהו if / elif / else במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא if / elif / else.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-14",
          "title": "for loops",
          "concepts": "iteration, range, enumerate",
          "example": "for i, x in enumerate(['a','b']):\n    print(i, x)",
          "exercise": "עבור על רשימת ציונים והדפס index + value.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: iteration, range, enumerate.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם for loops בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של for loops?",
              "a": "להבין וליישם נכון את: iteration, range, enumerate."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "for loops הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: iteration, range, enumerate.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "for i, x in enumerate(['a','b']):\n    print(i, x)",
          "challenge": "עבור על רשימת ציונים והדפס index + value.",
          "objectives": [
            "להסביר מהו for loops במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא for loops.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-15",
          "title": "while loops",
          "concepts": "state loops, sentinel, break, continue",
          "example": "n = 3\nwhile n:\n    print(n)\n    n -= 1",
          "exercise": "בנה תפריט CLI שרץ עד שהמשתמש בוחר exit.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: state loops, sentinel, break, continue.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם while loops בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של while loops?",
              "a": "להבין וליישם נכון את: state loops, sentinel, break, continue."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "while loops הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: state loops, sentinel, break, continue.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "n = 3\nwhile n:\n    print(n)\n    n -= 1",
          "challenge": "בנה תפריט CLI שרץ עד שהמשתמש בוחר exit.",
          "objectives": [
            "להסביר מהו while loops במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא while loops.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-16",
          "title": "Input ו-conversion",
          "concepts": "input, int/float conversion, validation basics",
          "example": "age = int(input('Age: '))",
          "exercise": "קבל מספר מהמשתמש וטפל בקלט לא מספרי.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: input, int/float conversion, validation basics.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Input ו-conversion בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Input ו-conversion?",
              "a": "להבין וליישם נכון את: input, int/float conversion, validation basics."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Input ו-conversion הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: input, int/float conversion, validation basics.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "age = int(input('Age: '))",
          "challenge": "קבל מספר מהמשתמש וטפל בקלט לא מספרי.",
          "objectives": [
            "להסביר מהו Input ו-conversion במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Input ו-conversion.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L2",
      "title": "Level 2 — Collections & Functions",
      "difficulty": "Beginner+",
      "desc": "מבני נתונים, פונקציות, scope וכלים פונקציונליים.",
      "lessons": [
        {
          "id": "lesson-17",
          "title": "Lists",
          "concepts": "append, extend, insert, remove, slicing, copy",
          "example": "nums = [1,2,3]\nnums.append(4)",
          "exercise": "ממש CRUD קטן על רשימת משימות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: append, extend, insert, remove, slicing, copy.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Lists בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Lists?",
              "a": "להבין וליישם נכון את: append, extend, insert, remove, slicing, copy."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Lists הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: append, extend, insert, remove, slicing, copy.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "nums = [1,2,3]\nnums.append(4)",
          "challenge": "ממש CRUD קטן על רשימת משימות.",
          "objectives": [
            "להסביר מהו Lists במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "הוסף 4 לרשימה.",
            "code": "items = [1, 2, 3]\nitems.____(4)\nprint(items)",
            "answer": "append"
          }
        },
        {
          "id": "lesson-18",
          "title": "Tuples",
          "concepts": "immutability, unpacking, return tuples",
          "example": "x, y = (10, 20)",
          "exercise": "החזר min/max מפונקציה ופרק אותם ל-2 משתנים.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: immutability, unpacking, return tuples.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Tuples בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Tuples?",
              "a": "להבין וליישם נכון את: immutability, unpacking, return tuples."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Tuples הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: immutability, unpacking, return tuples.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "x, y = (10, 20)",
          "challenge": "החזר min/max מפונקציה ופרק אותם ל-2 משתנים.",
          "objectives": [
            "להסביר מהו Tuples במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Tuples.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-19",
          "title": "Dictionaries",
          "concepts": "keys, values, items, get, setdefault",
          "example": "user = {'id': 1, 'name':'Dana'}\nprint(user.get('name'))",
          "exercise": "בנה dictionary של משתמש והוסף/עדכן שדות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: keys, values, items, get, setdefault.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Dictionaries בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Dictionaries?",
              "a": "להבין וליישם נכון את: keys, values, items, get, setdefault."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Dictionaries הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: keys, values, items, get, setdefault.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "user = {'id': 1, 'name':'Dana'}\nprint(user.get('name'))",
          "challenge": "בנה dictionary של משתמש והוסף/עדכן שדות.",
          "objectives": [
            "להסביר מהו Dictionaries במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "קבל את name מהמילון.",
            "code": "user = {'name': 'Dana'}\nprint(user.____('name'))",
            "answer": "get"
          }
        },
        {
          "id": "lesson-20",
          "title": "Sets",
          "concepts": "uniqueness, union, intersection, difference",
          "example": "a={1,2,3}; b={3,4}\nprint(a & b)",
          "exercise": "מצא ערכים כפולים בין שתי רשימות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: uniqueness, union, intersection, difference.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Sets בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Sets?",
              "a": "להבין וליישם נכון את: uniqueness, union, intersection, difference."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Sets הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: uniqueness, union, intersection, difference.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "a={1,2,3}; b={3,4}\nprint(a & b)",
          "challenge": "מצא ערכים כפולים בין שתי רשימות.",
          "objectives": [
            "להסביר מהו Sets במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Sets.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-21",
          "title": "Comprehensions",
          "concepts": "list/dict/set comprehensions, filtering",
          "example": "squares = [x*x for x in range(10) if x%2==0]",
          "exercise": "המר רשימת משתמשים ל-dict keyed by id.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: list/dict/set comprehensions, filtering.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Comprehensions בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Comprehensions?",
              "a": "להבין וליישם נכון את: list/dict/set comprehensions, filtering."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Comprehensions הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: list/dict/set comprehensions, filtering.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "squares = [x*x for x in range(10) if x%2==0]",
          "challenge": "המר רשימת משתמשים ל-dict keyed by id.",
          "objectives": [
            "להסביר מהו Comprehensions במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Comprehensions.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-22",
          "title": "Functions",
          "concepts": "def, return, parameters, defaults",
          "example": "def add(a, b=0):\n    return a+b",
          "exercise": "כתוב 5 פונקציות קטנות במקום קוד procedural אחד גדול.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: def, return, parameters, defaults.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Functions בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Functions?",
              "a": "להבין וליישם נכון את: def, return, parameters, defaults."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "פונקציות הן יחידת ההפשטה המרכזית ב-Python: הן מאפשרות reuse, הפרדת אחריות ו-testing.",
          "deep": [
            "parameters מוגדרים בחתימה; arguments הם הערכים שנשלחים בפועל.",
            "return מסיים את הפונקציה ומחזיר ערך; ללא return מוחזר None.",
            "mutable default argument נוצר פעם אחת בזמן הגדרת הפונקציה ולכן עלול ליצור bug."
          ],
          "mistakes": [
            "def add_item(x, items=[]): היא מלכודת mutable-default קלאסית.",
            "פונקציה שעושה יותר מדי דברים קשה לבדוק ולתחזק."
          ],
          "starter": "def discount_rate(is_member: bool) -> float:\n    if is_member:\n        return 0.10\n    return 0.0\n\nprint(discount_rate(True))",
          "challenge": "כתוב calculate_order_total(items, discount=0) עם validation ו-tests.",
          "objectives": [
            "להסביר מהו Functions במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את מילת ההחזרה.",
            "code": "def add(a, b):\n    ____ a + b\nprint(add(2, 3))",
            "answer": "return"
          }
        },
        {
          "id": "lesson-23",
          "title": "*args ו-**kwargs",
          "concepts": "variadic args, unpacking",
          "example": "def total(*nums): return sum(nums)",
          "exercise": "כתוב logger פשוט שמקבל metadata ב-**kwargs.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: variadic args, unpacking.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם *args ו-**kwargs בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של *args ו-**kwargs?",
              "a": "להבין וליישם נכון את: variadic args, unpacking."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "*args ו-**kwargs הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: variadic args, unpacking.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def total(*nums): return sum(nums)",
          "challenge": "כתוב logger פשוט שמקבל metadata ב-**kwargs.",
          "objectives": [
            "להסביר מהו *args ו-**kwargs במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא *args ו-**kwargs.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-24",
          "title": "Scope",
          "concepts": "local/global/nonlocal, LEGB",
          "example": "x = 10\ndef f():\n    x = 20\n    return x",
          "exercise": "הסבר למה שינוי local לא משנה global בלי global.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: local/global/nonlocal, LEGB.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Scope בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Scope?",
              "a": "להבין וליישם נכון את: local/global/nonlocal, LEGB."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Scope הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: local/global/nonlocal, LEGB.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "x = 10\ndef f():\n    x = 20\n    return x",
          "challenge": "הסבר למה שינוי local לא משנה global בלי global.",
          "objectives": [
            "להסביר מהו Scope במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Scope.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-25",
          "title": "lambda/map/filter",
          "concepts": "functional tools and when not to use them",
          "example": "sorted_users = sorted([{'age':30},{'age':20}], key=lambda u:u['age'])",
          "exercise": "מיין רשימת dicts לפי שני שדות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: functional tools and when not to use them.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם lambda/map/filter בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של lambda/map/filter?",
              "a": "להבין וליישם נכון את: functional tools and when not to use them."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "lambda/map/filter הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: functional tools and when not to use them.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "sorted_users = sorted([{'age':30},{'age':20}], key=lambda u:u['age'])",
          "challenge": "מיין רשימת dicts לפי שני שדות.",
          "objectives": [
            "להסביר מהו lambda/map/filter במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא lambda/map/filter.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L3",
      "title": "Level 3 — Pythonic & Advanced Core",
      "difficulty": "Intermediate",
      "desc": "Iterators, generators, decorators, context managers וכתיבת Python idiomatic.",
      "lessons": [
        {
          "id": "lesson-26",
          "title": "Iterable vs Iterator",
          "concepts": "iter, next, StopIteration",
          "example": "it = iter([1,2,3])\nprint(next(it))",
          "exercise": "ממש iterator קטן שסופר עד N.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: iter, next, StopIteration.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Iterable vs Iterator בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Iterable vs Iterator?",
              "a": "להבין וליישם נכון את: iter, next, StopIteration."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Iterable vs Iterator הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: iter, next, StopIteration.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "it = iter([1,2,3])\nprint(next(it))",
          "challenge": "ממש iterator קטן שסופר עד N.",
          "objectives": [
            "להסביר מהו Iterable vs Iterator במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Iterable vs Iterator.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-27",
          "title": "Generators",
          "concepts": "yield, lazy evaluation, pipelines",
          "example": "def count(n):\n    for i in range(n):\n        yield i",
          "exercise": "צור generator שקורא קובץ שורה-שורה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: yield, lazy evaluation, pipelines.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Generators בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Generators?",
              "a": "להבין וליישם נכון את: yield, lazy evaluation, pipelines."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Generators הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: yield, lazy evaluation, pipelines.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def count(n):\n    for i in range(n):\n        yield i",
          "challenge": "צור generator שקורא קובץ שורה-שורה.",
          "objectives": [
            "להסביר מהו Generators במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Generators.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-28",
          "title": "Decorators",
          "concepts": "wrappers, functools.wraps, parameterized decorators",
          "example": "from functools import wraps\n\ndef log_call(fn):\n    @wraps(fn)\n    def wrapper(*a, **kw):\n        print(fn.__name__)\n        return fn(*a, **kw)\n    return wrapper",
          "exercise": "כתוב decorator שמודד זמן ריצה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: wrappers, functools.wraps, parameterized decorators.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Decorators בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Decorators?",
              "a": "להבין וליישם נכון את: wrappers, functools.wraps, parameterized decorators."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Decorators הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: wrappers, functools.wraps, parameterized decorators.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from functools import wraps\n\ndef log_call(fn):\n    @wraps(fn)\n    def wrapper(*a, **kw):\n        print(fn.__name__)\n        return fn(*a, **kw)\n    return wrapper",
          "challenge": "כתוב decorator שמודד זמן ריצה.",
          "objectives": [
            "להסביר מהו Decorators במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Decorators.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-29",
          "title": "Context Managers",
          "concepts": "with, __enter__/__exit__, contextlib",
          "example": "from contextlib import contextmanager\n@contextmanager\ndef demo():\n    yield 'ok'",
          "exercise": "כתוב context manager שמודד זמן block.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: with, __enter__/__exit__, contextlib.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Context Managers בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Context Managers?",
              "a": "להבין וליישם נכון את: with, __enter__/__exit__, contextlib."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Context Managers הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: with, __enter__/__exit__, contextlib.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from contextlib import contextmanager\n@contextmanager\ndef demo():\n    yield 'ok'",
          "challenge": "כתוב context manager שמודד זמן block.",
          "objectives": [
            "להסביר מהו Context Managers במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Context Managers.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-30",
          "title": "Unpacking",
          "concepts": "starred expressions, dict merging",
          "example": "a, *middle, z = [1,2,3,4]",
          "exercise": "תרגל list unpacking ו-dict merging.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: starred expressions, dict merging.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Unpacking בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Unpacking?",
              "a": "להבין וליישם נכון את: starred expressions, dict merging."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Unpacking הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: starred expressions, dict merging.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "a, *middle, z = [1,2,3,4]",
          "challenge": "תרגל list unpacking ו-dict merging.",
          "objectives": [
            "להסביר מהו Unpacking במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Unpacking.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-31",
          "title": "Walrus operator",
          "concepts": "assignment expressions and readability",
          "example": "while (line := input('> ')) != 'quit':\n    print(line)",
          "exercise": "בנה loop שקורא עד quit בלי כפילות קוד.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: assignment expressions and readability.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Walrus operator בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Walrus operator?",
              "a": "להבין וליישם נכון את: assignment expressions and readability."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Walrus operator הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: assignment expressions and readability.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "while (line := input('> ')) != 'quit':\n    print(line)",
          "challenge": "בנה loop שקורא עד quit בלי כפילות קוד.",
          "objectives": [
            "להסביר מהו Walrus operator במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Walrus operator.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-32",
          "title": "Pattern Matching",
          "concepts": "match/case, guards, destructuring",
          "example": "def handle(cmd):\n    match cmd:\n        case ['add', x]: return x\n        case _: return None",
          "exercise": "ממש parser קטן לפקודות CLI.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: match/case, guards, destructuring.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Pattern Matching בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Pattern Matching?",
              "a": "להבין וליישם נכון את: match/case, guards, destructuring."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Pattern Matching הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: match/case, guards, destructuring.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def handle(cmd):\n    match cmd:\n        case ['add', x]: return x\n        case _: return None",
          "challenge": "ממש parser קטן לפקודות CLI.",
          "objectives": [
            "להסביר מהו Pattern Matching במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Pattern Matching.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L4",
      "title": "Level 4 — OOP & Data Modeling",
      "difficulty": "Intermediate",
      "desc": "מחלקות, inheritance, composition, dataclasses, protocols ו-design.",
      "lessons": [
        {
          "id": "lesson-33",
          "title": "Classes & Objects",
          "concepts": "class, self, state, methods",
          "example": "class User:\n    def __init__(self, name): self.name=name",
          "exercise": "בנה User עם name/email ו-method להצגה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: class, self, state, methods.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Classes & Objects בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Classes & Objects?",
              "a": "להבין וליישם נכון את: class, self, state, methods."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Classes & Objects הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: class, self, state, methods.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class User:\n    def __init__(self, name): self.name=name",
          "challenge": "בנה User עם name/email ו-method להצגה.",
          "objectives": [
            "להסביר מהו Classes & Objects במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Classes & Objects.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-34",
          "title": "Class/Static Methods",
          "concepts": "@classmethod, @staticmethod, alternate constructors",
          "example": "class Temperature:\n    @classmethod\n    def from_f(cls, f): return cls()",
          "exercise": "כתוב alternate constructor מ-dict.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: @classmethod, @staticmethod, alternate constructors.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Class/Static Methods בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Class/Static Methods?",
              "a": "להבין וליישם נכון את: @classmethod, @staticmethod, alternate constructors."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Class/Static Methods הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: @classmethod, @staticmethod, alternate constructors.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class Temperature:\n    @classmethod\n    def from_f(cls, f): return cls()",
          "challenge": "כתוב alternate constructor מ-dict.",
          "objectives": [
            "להסביר מהו Class/Static Methods במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Class/Static Methods.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-35",
          "title": "Properties",
          "concepts": "@property, setters, validation",
          "example": "class Product:\n    @property\n    def price(self): return self._price",
          "exercise": "צור property שמונע מחיר שלילי.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: @property, setters, validation.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Properties בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Properties?",
              "a": "להבין וליישם נכון את: @property, setters, validation."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Properties הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: @property, setters, validation.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class Product:\n    @property\n    def price(self): return self._price",
          "challenge": "צור property שמונע מחיר שלילי.",
          "objectives": [
            "להסביר מהו Properties במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Properties.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-36",
          "title": "Inheritance",
          "concepts": "super, overriding, MRO",
          "example": "class Admin(User):\n    pass",
          "exercise": "בנה היררכיה קטנה והסבר מתי inheritance לא מתאים.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: super, overriding, MRO.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Inheritance בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Inheritance?",
              "a": "להבין וליישם נכון את: super, overriding, MRO."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Inheritance הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: super, overriding, MRO.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class Admin(User):\n    pass",
          "challenge": "בנה היררכיה קטנה והסבר מתי inheritance לא מתאים.",
          "objectives": [
            "להסביר מהו Inheritance במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Inheritance.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-37",
          "title": "Composition",
          "concepts": "has-a relationships, dependency injection",
          "example": "class Order:\n    def __init__(self, payment): self.payment=payment",
          "exercise": "החלף inheritance ב-composition בדוגמה אחת.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: has-a relationships, dependency injection.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Composition בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Composition?",
              "a": "להבין וליישם נכון את: has-a relationships, dependency injection."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Composition הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: has-a relationships, dependency injection.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class Order:\n    def __init__(self, payment): self.payment=payment",
          "challenge": "החלף inheritance ב-composition בדוגמה אחת.",
          "objectives": [
            "להסביר מהו Composition במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Composition.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-38",
          "title": "Dataclasses",
          "concepts": "@dataclass, frozen, field, ordering",
          "example": "from dataclasses import dataclass\n@dataclass\nclass Point:\n    x:int\n    y:int",
          "exercise": "המר class boilerplate ל-dataclass.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: @dataclass, frozen, field, ordering.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Dataclasses בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Dataclasses?",
              "a": "להבין וליישם נכון את: @dataclass, frozen, field, ordering."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Dataclasses הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: @dataclass, frozen, field, ordering.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from dataclasses import dataclass\n@dataclass\nclass Point:\n    x:int\n    y:int",
          "challenge": "המר class boilerplate ל-dataclass.",
          "objectives": [
            "להסביר מהו Dataclasses במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Dataclasses.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-39",
          "title": "Enums",
          "concepts": "Enum, StrEnum, domain states",
          "example": "from enum import StrEnum\nclass Status(StrEnum):\n    ACTIVE='active'",
          "exercise": "צור enum לסטטוס הזמנה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: Enum, StrEnum, domain states.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Enums בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Enums?",
              "a": "להבין וליישם נכון את: Enum, StrEnum, domain states."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Enums הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: Enum, StrEnum, domain states.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from enum import StrEnum\nclass Status(StrEnum):\n    ACTIVE='active'",
          "challenge": "צור enum לסטטוס הזמנה.",
          "objectives": [
            "להסביר מהו Enums במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Enums.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-40",
          "title": "Protocols & ABC",
          "concepts": "duck typing, typing.Protocol, abstract base classes",
          "example": "from typing import Protocol\nclass Sender(Protocol):\n    def send(self, msg:str)->None: ...",
          "exercise": "הגדר interface לשירות הודעות וממש שתי implementations.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: duck typing, typing.Protocol, abstract base classes.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Protocols & ABC בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Protocols & ABC?",
              "a": "להבין וליישם נכון את: duck typing, typing.Protocol, abstract base classes."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Protocols & ABC הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: duck typing, typing.Protocol, abstract base classes.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from typing import Protocol\nclass Sender(Protocol):\n    def send(self, msg:str)->None: ...",
          "challenge": "הגדר interface לשירות הודעות וממש שתי implementations.",
          "objectives": [
            "להסביר מהו Protocols & ABC במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Protocols & ABC.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-41",
          "title": "SOLID בפייתון",
          "concepts": "SRP, OCP, LSP, ISP, DIP",
          "example": "class PaymentService:\n    def __init__(self, gateway): self.gateway=gateway",
          "exercise": "זהה הפרת SRP בקוד גדול ופצל אותו.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: SRP, OCP, LSP, ISP, DIP.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם SOLID בפייתון בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של SOLID בפייתון?",
              "a": "להבין וליישם נכון את: SRP, OCP, LSP, ISP, DIP."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "SOLID בפייתון הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: SRP, OCP, LSP, ISP, DIP.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class PaymentService:\n    def __init__(self, gateway): self.gateway=gateway",
          "challenge": "זהה הפרת SRP בקוד גדול ופצל אותו.",
          "objectives": [
            "להסביר מהו SOLID בפייתון במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא SOLID בפייתון.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L5",
      "title": "Level 5 — Errors, Files, Serialization & Logging",
      "difficulty": "Intermediate",
      "desc": "חריגות, משאבים, קבצים, JSON/CSV, logging וקונפיגורציה.",
      "lessons": [
        {
          "id": "lesson-42",
          "title": "Exceptions",
          "concepts": "try/except/else/finally, raise",
          "example": "try:\n    x=int('x')\nexcept ValueError as e:\n    print(e)",
          "exercise": "טפל ב-3 סוגי שגיאות בלי except Exception גורף.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: try/except/else/finally, raise.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Exceptions בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Exceptions?",
              "a": "להבין וליישם נכון את: try/except/else/finally, raise."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Exceptions הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: try/except/else/finally, raise.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "try:\n    x=int('x')\nexcept ValueError as e:\n    print(e)",
          "challenge": "טפל ב-3 סוגי שגיאות בלי except Exception גורף.",
          "objectives": [
            "להסביר מהו Exceptions במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Exceptions.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-43",
          "title": "Custom Exceptions",
          "concepts": "domain exceptions, chaining",
          "example": "class NotFoundError(Exception):\n    pass",
          "exercise": "צור exception עסקי והשתמש ב-raise ... from.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: domain exceptions, chaining.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Custom Exceptions בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Custom Exceptions?",
              "a": "להבין וליישם נכון את: domain exceptions, chaining."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Custom Exceptions הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: domain exceptions, chaining.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class NotFoundError(Exception):\n    pass",
          "challenge": "צור exception עסקי והשתמש ב-raise ... from.",
          "objectives": [
            "להסביר מהו Custom Exceptions במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Custom Exceptions.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-44",
          "title": "Files & pathlib",
          "concepts": "Path, read_text/write_text, directory traversal",
          "example": "from pathlib import Path\np=Path('data.txt')\np.write_text('hello')",
          "exercise": "סרוק תיקייה וספור קבצים לפי suffix.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: Path, read_text/write_text, directory traversal.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Files & pathlib בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Files & pathlib?",
              "a": "להבין וליישם נכון את: Path, read_text/write_text, directory traversal."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Files & pathlib הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: Path, read_text/write_text, directory traversal.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from pathlib import Path\np=Path('data.txt')\np.write_text('hello')",
          "challenge": "סרוק תיקייה וספור קבצים לפי suffix.",
          "objectives": [
            "להסביר מהו Files & pathlib במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Files & pathlib.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-45",
          "title": "JSON",
          "concepts": "json loads/dumps/load/dump",
          "example": "import json\ntext=json.dumps({'ok':True})",
          "exercise": "שמור רשימת משתמשים לקובץ JSON וטען אותה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: json loads/dumps/load/dump.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם JSON בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של JSON?",
              "a": "להבין וליישם נכון את: json loads/dumps/load/dump."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "JSON הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: json loads/dumps/load/dump.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import json\ntext=json.dumps({'ok':True})",
          "challenge": "שמור רשימת משתמשים לקובץ JSON וטען אותה.",
          "objectives": [
            "להסביר מהו JSON במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא JSON.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-46",
          "title": "CSV",
          "concepts": "csv module, DictReader/DictWriter",
          "example": "import csv",
          "exercise": "קרא CSV, סנן רשומות וכתוב CSV חדש.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: csv module, DictReader/DictWriter.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם CSV בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של CSV?",
              "a": "להבין וליישם נכון את: csv module, DictReader/DictWriter."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "CSV הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: csv module, DictReader/DictWriter.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import csv",
          "challenge": "קרא CSV, סנן רשומות וכתוב CSV חדש.",
          "objectives": [
            "להסביר מהו CSV במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא CSV.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-47",
          "title": "Logging",
          "concepts": "levels, handlers, formatters, structured context",
          "example": "import logging\nlogging.basicConfig(level=logging.INFO)",
          "exercise": "החלף print-ים ב-logging עם INFO/WARNING/ERROR.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: levels, handlers, formatters, structured context.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Logging בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Logging?",
              "a": "להבין וליישם נכון את: levels, handlers, formatters, structured context."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Logging הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: levels, handlers, formatters, structured context.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import logging\nlogging.basicConfig(level=logging.INFO)",
          "challenge": "החלף print-ים ב-logging עם INFO/WARNING/ERROR.",
          "objectives": [
            "להסביר מהו Logging במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Logging.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-48",
          "title": "Environment variables",
          "concepts": "os.environ, .env concepts, secrets hygiene",
          "example": "import os\napi_key=os.getenv('API_KEY')",
          "exercise": "קרא config מהסביבה ואל תשמור secret בקוד.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: os.environ, .env concepts, secrets hygiene.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Environment variables בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Environment variables?",
              "a": "להבין וליישם נכון את: os.environ, .env concepts, secrets hygiene."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Environment variables הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: os.environ, .env concepts, secrets hygiene.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import os\napi_key=os.getenv('API_KEY')",
          "challenge": "קרא config מהסביבה ואל תשמור secret בקוד.",
          "objectives": [
            "להסביר מהו Environment variables במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Environment variables.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L6",
      "title": "Level 6 — Typing, Quality & Packaging",
      "difficulty": "Intermediate+",
      "desc": "Type hints מודרניים, generics, linting, formatting, pyproject ו-Packaging.",
      "lessons": [
        {
          "id": "lesson-49",
          "title": "Type Hints",
          "concepts": "annotations, unions, optional, collections",
          "example": "def greet(name: str) -> str:\n    return f'Hi {name}'",
          "exercise": "הוסף typing מלא למודול קיים.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: annotations, unions, optional, collections.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Type Hints בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Type Hints?",
              "a": "להבין וליישם נכון את: annotations, unions, optional, collections."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Type Hints הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: annotations, unions, optional, collections.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def greet(name: str) -> str:\n    return f'Hi {name}'",
          "challenge": "הוסף typing מלא למודול קיים.",
          "objectives": [
            "להסביר מהו Type Hints במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Type Hints.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-50",
          "title": "Generics",
          "concepts": "TypeVar, generic functions/classes",
          "example": "from typing import TypeVar\nT=TypeVar('T')\ndef first(xs:list[T])->T: return xs[0]",
          "exercise": "כתוב generic Repository interface.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: TypeVar, generic functions/classes.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Generics בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Generics?",
              "a": "להבין וליישם נכון את: TypeVar, generic functions/classes."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Generics הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: TypeVar, generic functions/classes.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from typing import TypeVar\nT=TypeVar('T')\ndef first(xs:list[T])->T: return xs[0]",
          "challenge": "כתוב generic Repository interface.",
          "objectives": [
            "להסביר מהו Generics במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Generics.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-51",
          "title": "TypedDict & Literal",
          "concepts": "structured dicts, constrained strings",
          "example": "from typing import TypedDict\nclass UserRow(TypedDict):\n    id:int\n    name:str",
          "exercise": "הגדר payload typed עבור API.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: structured dicts, constrained strings.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם TypedDict & Literal בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של TypedDict & Literal?",
              "a": "להבין וליישם נכון את: structured dicts, constrained strings."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "TypedDict & Literal הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: structured dicts, constrained strings.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from typing import TypedDict\nclass UserRow(TypedDict):\n    id:int\n    name:str",
          "challenge": "הגדר payload typed עבור API.",
          "objectives": [
            "להסביר מהו TypedDict & Literal במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא TypedDict & Literal.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-52",
          "title": "mypy/pyright concepts",
          "concepts": "static analysis, gradual typing",
          "example": "def add(a:int,b:int)->int: return a+b",
          "exercise": "מצא type bugs שה-runtime לא תופס מוקדם.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: static analysis, gradual typing.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם mypy/pyright concepts בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של mypy/pyright concepts?",
              "a": "להבין וליישם נכון את: static analysis, gradual typing."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "mypy/pyright concepts הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: static analysis, gradual typing.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def add(a:int,b:int)->int: return a+b",
          "challenge": "מצא type bugs שה-runtime לא תופס מוקדם.",
          "objectives": [
            "להסביר מהו mypy/pyright concepts במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא mypy/pyright concepts.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-53",
          "title": "Formatting & linting",
          "concepts": "Ruff, Black concepts, import hygiene",
          "example": "ruff check .",
          "exercise": "הגדר quality gates בפרויקט.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: Ruff, Black concepts, import hygiene.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Formatting & linting בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Formatting & linting?",
              "a": "להבין וליישם נכון את: Ruff, Black concepts, import hygiene."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Formatting & linting הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: Ruff, Black concepts, import hygiene.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "ruff check .",
          "challenge": "הגדר quality gates בפרויקט.",
          "objectives": [
            "להסביר מהו Formatting & linting במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Formatting & linting.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-54",
          "title": "pyproject.toml",
          "concepts": "project metadata, dependencies, tool config",
          "example": "[project]\nname = 'demo'\nversion = '0.1.0'",
          "exercise": "צור pyproject בסיסי לפרויקט.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: project metadata, dependencies, tool config.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם pyproject.toml בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של pyproject.toml?",
              "a": "להבין וליישם נכון את: project metadata, dependencies, tool config."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "pyproject.toml הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: project metadata, dependencies, tool config.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "[project]\nname = 'demo'\nversion = '0.1.0'",
          "challenge": "צור pyproject בסיסי לפרויקט.",
          "objectives": [
            "להסביר מהו pyproject.toml במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא pyproject.toml.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-55",
          "title": "Modules & Packages",
          "concepts": "imports, __init__, absolute vs relative",
          "example": "from myapp.services import users",
          "exercise": "פצל קובץ גדול ל-package עם שכבות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: imports, __init__, absolute vs relative.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Modules & Packages בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Modules & Packages?",
              "a": "להבין וליישם נכון את: imports, __init__, absolute vs relative."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Modules & Packages הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: imports, __init__, absolute vs relative.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from myapp.services import users",
          "challenge": "פצל קובץ גדול ל-package עם שכבות.",
          "objectives": [
            "להסביר מהו Modules & Packages במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Modules & Packages.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L7",
      "title": "Level 7 — Testing with pytest",
      "difficulty": "Intermediate+",
      "desc": "Unit/integration tests, fixtures, mocks, parametrization, coverage ו-test design.",
      "lessons": [
        {
          "id": "lesson-56",
          "title": "Testing mindset",
          "concepts": "arrange-act-assert, deterministic tests, test pyramid",
          "example": "def add(a,b): return a+b\n\ndef test_add():\n    assert add(2,3)==5",
          "exercise": "כתוב 5 unit tests לפונקציות Core.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: arrange-act-assert, deterministic tests, test pyramid.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Testing mindset בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Testing mindset?",
              "a": "להבין וליישם נכון את: arrange-act-assert, deterministic tests, test pyramid."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Testing mindset הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: arrange-act-assert, deterministic tests, test pyramid.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def add(a,b): return a+b\n\ndef test_add():\n    assert add(2,3)==5",
          "challenge": "כתוב 5 unit tests לפונקציות Core.",
          "objectives": [
            "להסביר מהו Testing mindset במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Testing mindset.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-57",
          "title": "pytest basics",
          "concepts": "discovery, assert rewriting, -q/-k/-x",
          "example": "def test_true():\n    assert True",
          "exercise": "הרץ subset של tests לפי -k.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: discovery, assert rewriting, -q/-k/-x.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם pytest basics בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של pytest basics?",
              "a": "להבין וליישם נכון את: discovery, assert rewriting, -q/-k/-x."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "pytest מאפשר לכתוב בדיקות קצרות וקריאות ולתפוס regression לפני שהקוד מגיע למשתמשים.",
          "deep": [
            "pytest מבצע test discovery לפי conventions.",
            "assert רגיל מקבל introspection מפורט כשבדיקה נכשלת.",
            "בדיקה טובה צריכה להיות deterministic ובעלת סיבה ברורה אחת להיכשל."
          ],
          "mistakes": [
            "לבדוק implementation details במקום behavior.",
            "לשתף state בין tests כך שסדר הריצה משנה תוצאות."
          ],
          "starter": "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n\nprint(add(2, 3))",
          "challenge": "כתוב normalize_email ושלושה tests לפחות כולל edge cases.",
          "objectives": [
            "להסביר מהו pytest basics במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את מילת הבדיקה.",
            "code": "def test_add():\n    ____ 2 + 3 == 5",
            "answer": "assert"
          }
        },
        {
          "id": "lesson-58",
          "title": "Fixtures",
          "concepts": "@pytest.fixture, scopes, dependencies",
          "example": "import pytest\n@pytest.fixture\ndef user(): return {'id':1}",
          "exercise": "צור fixtures משותפים ל-user ו-db fake.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: @pytest.fixture, scopes, dependencies.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Fixtures בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Fixtures?",
              "a": "להבין וליישם נכון את: @pytest.fixture, scopes, dependencies."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Fixtures הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: @pytest.fixture, scopes, dependencies.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import pytest\n@pytest.fixture\ndef user(): return {'id':1}",
          "challenge": "צור fixtures משותפים ל-user ו-db fake.",
          "objectives": [
            "להסביר מהו Fixtures במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Fixtures.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-59",
          "title": "Parametrize",
          "concepts": "@pytest.mark.parametrize",
          "example": "import pytest\n@pytest.mark.parametrize('a,b,e',[(1,2,3),(2,3,5)])\ndef test_add(a,b,e): assert a+b==e",
          "exercise": "בדוק 10 edge cases באמצעות parametrize.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: @pytest.mark.parametrize.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Parametrize בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Parametrize?",
              "a": "להבין וליישם נכון את: @pytest.mark.parametrize."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Parametrize הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: @pytest.mark.parametrize.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import pytest\n@pytest.mark.parametrize('a,b,e',[(1,2,3),(2,3,5)])\ndef test_add(a,b,e): assert a+b==e",
          "challenge": "בדוק 10 edge cases באמצעות parametrize.",
          "objectives": [
            "להסביר מהו Parametrize במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Parametrize.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-60",
          "title": "Exceptions & approx",
          "concepts": "pytest.raises, pytest.approx",
          "example": "import pytest\ndef test_zero():\n    with pytest.raises(ZeroDivisionError): 1/0",
          "exercise": "בדוק חריגה ו-floating point.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: pytest.raises, pytest.approx.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Exceptions & approx בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Exceptions & approx?",
              "a": "להבין וליישם נכון את: pytest.raises, pytest.approx."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Exceptions & approx הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: pytest.raises, pytest.approx.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import pytest\ndef test_zero():\n    with pytest.raises(ZeroDivisionError): 1/0",
          "challenge": "בדוק חריגה ו-floating point.",
          "objectives": [
            "להסביר מהו Exceptions & approx במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Exceptions & approx.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-61",
          "title": "Monkeypatch & Mock",
          "concepts": "monkeypatch, unittest.mock, patch boundaries",
          "example": "from unittest.mock import Mock\nsender=Mock()",
          "exercise": "בדוק service בלי לבצע HTTP אמיתי.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: monkeypatch, unittest.mock, patch boundaries.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Monkeypatch & Mock בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Monkeypatch & Mock?",
              "a": "להבין וליישם נכון את: monkeypatch, unittest.mock, patch boundaries."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Monkeypatch & Mock הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: monkeypatch, unittest.mock, patch boundaries.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from unittest.mock import Mock\nsender=Mock()",
          "challenge": "בדוק service בלי לבצע HTTP אמיתי.",
          "objectives": [
            "להסביר מהו Monkeypatch & Mock במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Monkeypatch & Mock.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-62",
          "title": "Temporary files",
          "concepts": "tmp_path, filesystem tests",
          "example": "def test_file(tmp_path):\n    p=tmp_path/'x.txt'; p.write_text('a'); assert p.read_text()=='a'",
          "exercise": "כתוב test לייצוא קובץ.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: tmp_path, filesystem tests.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Temporary files בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Temporary files?",
              "a": "להבין וליישם נכון את: tmp_path, filesystem tests."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Temporary files הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: tmp_path, filesystem tests.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def test_file(tmp_path):\n    p=tmp_path/'x.txt'; p.write_text('a'); assert p.read_text()=='a'",
          "challenge": "כתוב test לייצוא קובץ.",
          "objectives": [
            "להסביר מהו Temporary files במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Temporary files.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-63",
          "title": "Markers",
          "concepts": "custom markers, skip, xfail",
          "example": "import pytest\n@pytest.mark.slow\ndef test_slow(): pass",
          "exercise": "הפרד unit מ-integration tests.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: custom markers, skip, xfail.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Markers בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Markers?",
              "a": "להבין וליישם נכון את: custom markers, skip, xfail."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Markers הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: custom markers, skip, xfail.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import pytest\n@pytest.mark.slow\ndef test_slow(): pass",
          "challenge": "הפרד unit מ-integration tests.",
          "objectives": [
            "להסביר מהו Markers במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Markers.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-64",
          "title": "Coverage",
          "concepts": "branch coverage, meaningful coverage, pytest-cov",
          "example": "pytest --cov=myapp --cov-report=term-missing",
          "exercise": "מצא ענף לא מכוסה והוסף test.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: branch coverage, meaningful coverage, pytest-cov.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Coverage בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Coverage?",
              "a": "להבין וליישם נכון את: branch coverage, meaningful coverage, pytest-cov."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Coverage הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: branch coverage, meaningful coverage, pytest-cov.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "pytest --cov=myapp --cov-report=term-missing",
          "challenge": "מצא ענף לא מכוסה והוסף test.",
          "objectives": [
            "להסביר מהו Coverage במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Coverage.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-65",
          "title": "Test architecture",
          "concepts": "factories, builders, fixtures composition, anti-patterns",
          "example": "def make_user(**overrides):\n    return {'id':1,'name':'A'} | overrides",
          "exercise": "בנה test factory במקום fixture ענק.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: factories, builders, fixtures composition, anti-patterns.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Test architecture בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Test architecture?",
              "a": "להבין וליישם נכון את: factories, builders, fixtures composition, anti-patterns."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Test architecture הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: factories, builders, fixtures composition, anti-patterns.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def make_user(**overrides):\n    return {'id':1,'name':'A'} | overrides",
          "challenge": "בנה test factory במקום fixture ענק.",
          "objectives": [
            "להסביר מהו Test architecture במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Test architecture.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L8",
      "title": "Level 8 — Databases & SQL",
      "difficulty": "Intermediate+",
      "desc": "SQL, SQLite/PostgreSQL concepts, transactions, SQLAlchemy ו-migrations.",
      "lessons": [
        {
          "id": "lesson-66",
          "title": "Relational basics",
          "concepts": "tables, rows, PK/FK, normalization, indexes",
          "example": "SELECT id, name FROM users WHERE active = true;",
          "exercise": "תכנן schema ל-users/orders/products.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: tables, rows, PK/FK, normalization, indexes.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Relational basics בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Relational basics?",
              "a": "להבין וליישם נכון את: tables, rows, PK/FK, normalization, indexes."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Relational basics הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: tables, rows, PK/FK, normalization, indexes.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "SELECT id, name FROM users WHERE active = true;",
          "challenge": "תכנן schema ל-users/orders/products.",
          "objectives": [
            "להסביר מהו Relational basics במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Relational basics.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-67",
          "title": "CRUD SQL",
          "concepts": "INSERT/SELECT/UPDATE/DELETE",
          "example": "INSERT INTO users(name) VALUES ('Dana');",
          "exercise": "כתוב CRUD מלא לטבלה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: INSERT/SELECT/UPDATE/DELETE.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם CRUD SQL בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של CRUD SQL?",
              "a": "להבין וליישם נכון את: INSERT/SELECT/UPDATE/DELETE."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "CRUD SQL הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: INSERT/SELECT/UPDATE/DELETE.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "INSERT INTO users(name) VALUES ('Dana');",
          "challenge": "כתוב CRUD מלא לטבלה.",
          "objectives": [
            "להסביר מהו CRUD SQL במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא CRUD SQL.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-68",
          "title": "JOIN & aggregation",
          "concepts": "INNER/LEFT JOIN, GROUP BY, HAVING",
          "example": "SELECT u.id, COUNT(o.id) FROM users u LEFT JOIN orders o ON o.user_id=u.id GROUP BY u.id;",
          "exercise": "מצא top customers לפי סכום הזמנות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: INNER/LEFT JOIN, GROUP BY, HAVING.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם JOIN & aggregation בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של JOIN & aggregation?",
              "a": "להבין וליישם נכון את: INNER/LEFT JOIN, GROUP BY, HAVING."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "JOIN & aggregation הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: INNER/LEFT JOIN, GROUP BY, HAVING.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "SELECT u.id, COUNT(o.id) FROM users u LEFT JOIN orders o ON o.user_id=u.id GROUP BY u.id;",
          "challenge": "מצא top customers לפי סכום הזמנות.",
          "objectives": [
            "להסביר מהו JOIN & aggregation במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא JOIN & aggregation.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-69",
          "title": "Transactions",
          "concepts": "ACID, commit, rollback, isolation concepts",
          "example": "BEGIN;\nUPDATE accounts SET balance=balance-10 WHERE id=1;\nCOMMIT;",
          "exercise": "תאר transfer בטוח בין חשבונות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: ACID, commit, rollback, isolation concepts.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Transactions בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Transactions?",
              "a": "להבין וליישם נכון את: ACID, commit, rollback, isolation concepts."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Transactions הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: ACID, commit, rollback, isolation concepts.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "BEGIN;\nUPDATE accounts SET balance=balance-10 WHERE id=1;\nCOMMIT;",
          "challenge": "תאר transfer בטוח בין חשבונות.",
          "objectives": [
            "להסביר מהו Transactions במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Transactions.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-70",
          "title": "Indexes",
          "concepts": "B-tree concept, selectivity, EXPLAIN",
          "example": "CREATE INDEX idx_users_email ON users(email);",
          "exercise": "בחר 3 indexes ל-API של חיפוש.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: B-tree concept, selectivity, EXPLAIN.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Indexes בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Indexes?",
              "a": "להבין וליישם נכון את: B-tree concept, selectivity, EXPLAIN."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Indexes הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: B-tree concept, selectivity, EXPLAIN.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "CREATE INDEX idx_users_email ON users(email);",
          "challenge": "בחר 3 indexes ל-API של חיפוש.",
          "objectives": [
            "להסביר מהו Indexes במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Indexes.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-71",
          "title": "SQLAlchemy ORM",
          "concepts": "engine, session, declarative models",
          "example": "from sqlalchemy.orm import DeclarativeBase\nclass Base(DeclarativeBase): pass",
          "exercise": "הגדר User model ו-session.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: engine, session, declarative models.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם SQLAlchemy ORM בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של SQLAlchemy ORM?",
              "a": "להבין וליישם נכון את: engine, session, declarative models."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "SQLAlchemy ORM הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: engine, session, declarative models.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from sqlalchemy.orm import DeclarativeBase\nclass Base(DeclarativeBase): pass",
          "challenge": "הגדר User model ו-session.",
          "objectives": [
            "להסביר מהו SQLAlchemy ORM במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא SQLAlchemy ORM.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-72",
          "title": "Relationships",
          "concepts": "one-to-many, many-to-many, eager/lazy loading",
          "example": "# relationship(...)",
          "exercise": "בנה User-Order relationship.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: one-to-many, many-to-many, eager/lazy loading.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Relationships בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Relationships?",
              "a": "להבין וליישם נכון את: one-to-many, many-to-many, eager/lazy loading."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Relationships הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: one-to-many, many-to-many, eager/lazy loading.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# relationship(...)",
          "challenge": "בנה User-Order relationship.",
          "objectives": [
            "להסביר מהו Relationships במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Relationships.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-73",
          "title": "Migrations",
          "concepts": "Alembic concepts, revision, upgrade/downgrade",
          "example": "alembic revision --autogenerate -m 'add users'",
          "exercise": "תכנן migration להוספת unique email.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: Alembic concepts, revision, upgrade/downgrade.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Migrations בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Migrations?",
              "a": "להבין וליישם נכון את: Alembic concepts, revision, upgrade/downgrade."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Migrations הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: Alembic concepts, revision, upgrade/downgrade.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "alembic revision --autogenerate -m 'add users'",
          "challenge": "תכנן migration להוספת unique email.",
          "objectives": [
            "להסביר מהו Migrations במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Migrations.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L9",
      "title": "Level 9 — HTTP, APIs & FastAPI",
      "difficulty": "Advanced",
      "desc": "HTTP לעומק ובניית REST API production-grade עם FastAPI.",
      "lessons": [
        {
          "id": "lesson-74",
          "title": "HTTP fundamentals",
          "concepts": "methods, status codes, headers, body, idempotency, caching",
          "example": "GET /users/123 HTTP/1.1",
          "exercise": "בחר status codes נכונים ל-CRUD.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: methods, status codes, headers, body, idempotency, caching.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם HTTP fundamentals בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של HTTP fundamentals?",
              "a": "להבין וליישם נכון את: methods, status codes, headers, body, idempotency, caching."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "HTTP fundamentals הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: methods, status codes, headers, body, idempotency, caching.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "GET /users/123 HTTP/1.1",
          "challenge": "בחר status codes נכונים ל-CRUD.",
          "objectives": [
            "להסביר מהו HTTP fundamentals במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא HTTP fundamentals.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-75",
          "title": "REST design",
          "concepts": "resources, URLs, pagination, filtering, versioning",
          "example": "GET /api/v1/users?limit=20&offset=0",
          "exercise": "תכנן endpoints למערכת tasks.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: resources, URLs, pagination, filtering, versioning.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם REST design בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של REST design?",
              "a": "להבין וליישם נכון את: resources, URLs, pagination, filtering, versioning."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "REST design הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: resources, URLs, pagination, filtering, versioning.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "GET /api/v1/users?limit=20&offset=0",
          "challenge": "תכנן endpoints למערכת tasks.",
          "objectives": [
            "להסביר מהו REST design במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא REST design.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-76",
          "title": "FastAPI first app",
          "concepts": "FastAPI instance, routes, uvicorn",
          "example": "from fastapi import FastAPI\napp=FastAPI()\n@app.get('/health')\ndef health(): return {'ok':True}",
          "exercise": "הרץ API עם health endpoint.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: FastAPI instance, routes, uvicorn.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם FastAPI first app בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של FastAPI first app?",
              "a": "להבין וליישם נכון את: FastAPI instance, routes, uvicorn."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "FastAPI משתמשת ב-type hints, Pydantic ו-OpenAPI כדי לבנות APIs עם validation ותיעוד אוטומטי.",
          "deep": [
            "decorator כמו @app.get רושם route.",
            "Uvicorn הוא ASGI server שמריץ את האפליקציה.",
            "routers צריכים להישאר דקים; business logic עדיף להעביר ל-service layer."
          ],
          "mistakes": [
            "לשים business logic כבד ישירות בתוך route.",
            "לכתוב async def ולבצע בפנים פעולות blocking ארוכות."
          ],
          "starter": "message = 'GET /health -> 200 OK'\nprint(message)",
          "challenge": "בנה /health ו-/users/{id}, הוסף response model ו-tests.",
          "objectives": [
            "להסביר מהו FastAPI first app במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את מתודת ה-route.",
            "code": "# @app.____('/health')\nprint('health route')",
            "answer": "get"
          }
        },
        {
          "id": "lesson-77",
          "title": "Path & Query params",
          "concepts": "validation, Annotated, defaults",
          "example": "from fastapi import FastAPI\napp=FastAPI()\n@app.get('/users/{user_id}')\ndef get_user(user_id:int, q:str|None=None): return {'id':user_id,'q':q}",
          "exercise": "בנה endpoint עם pagination.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: validation, Annotated, defaults.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Path & Query params בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Path & Query params?",
              "a": "להבין וליישם נכון את: validation, Annotated, defaults."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Path & Query params הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: validation, Annotated, defaults.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from fastapi import FastAPI\napp=FastAPI()\n@app.get('/users/{user_id}')\ndef get_user(user_id:int, q:str|None=None): return {'id':user_id,'q':q}",
          "challenge": "בנה endpoint עם pagination.",
          "objectives": [
            "להסביר מהו Path & Query params במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Path & Query params.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-78",
          "title": "Pydantic models",
          "concepts": "request/response models, validation",
          "example": "from pydantic import BaseModel\nclass UserCreate(BaseModel):\n    name:str\n    email:str",
          "exercise": "צור schemas נפרדים Create/Read.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: request/response models, validation.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Pydantic models בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Pydantic models?",
              "a": "להבין וליישם נכון את: request/response models, validation."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Pydantic models הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: request/response models, validation.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from pydantic import BaseModel\nclass UserCreate(BaseModel):\n    name:str\n    email:str",
          "challenge": "צור schemas נפרדים Create/Read.",
          "objectives": [
            "להסביר מהו Pydantic models במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Pydantic models.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-79",
          "title": "Dependency Injection",
          "concepts": "Depends, reusable dependencies",
          "example": "from fastapi import Depends",
          "exercise": "צור dependency לקבלת current user.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: Depends, reusable dependencies.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Dependency Injection בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Dependency Injection?",
              "a": "להבין וליישם נכון את: Depends, reusable dependencies."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Dependency Injection הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: Depends, reusable dependencies.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from fastapi import Depends",
          "challenge": "צור dependency לקבלת current user.",
          "objectives": [
            "להסביר מהו Dependency Injection במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Dependency Injection.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-80",
          "title": "Error handling",
          "concepts": "HTTPException, custom handlers",
          "example": "from fastapi import HTTPException\nraise HTTPException(404,'Not found')",
          "exercise": "מפה domain exception ל-HTTP 404.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: HTTPException, custom handlers.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Error handling בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Error handling?",
              "a": "להבין וליישם נכון את: HTTPException, custom handlers."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Error handling הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: HTTPException, custom handlers.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from fastapi import HTTPException\nraise HTTPException(404,'Not found')",
          "challenge": "מפה domain exception ל-HTTP 404.",
          "objectives": [
            "להסביר מהו Error handling במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Error handling.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-81",
          "title": "Routers",
          "concepts": "APIRouter, modular API structure",
          "example": "from fastapi import APIRouter\nrouter=APIRouter(prefix='/users')",
          "exercise": "פצל endpoints ל-routers.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: APIRouter, modular API structure.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Routers בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Routers?",
              "a": "להבין וליישם נכון את: APIRouter, modular API structure."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Routers הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: APIRouter, modular API structure.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from fastapi import APIRouter\nrouter=APIRouter(prefix='/users')",
          "challenge": "פצל endpoints ל-routers.",
          "objectives": [
            "להסביר מהו Routers במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Routers.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-82",
          "title": "Middleware",
          "concepts": "request lifecycle, CORS, timing, request IDs",
          "example": "# @app.middleware('http')",
          "exercise": "הוסף middleware שמודד זמן בקשה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: request lifecycle, CORS, timing, request IDs.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Middleware בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Middleware?",
              "a": "להבין וליישם נכון את: request lifecycle, CORS, timing, request IDs."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Middleware הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: request lifecycle, CORS, timing, request IDs.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# @app.middleware('http')",
          "challenge": "הוסף middleware שמודד זמן בקשה.",
          "objectives": [
            "להסביר מהו Middleware במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Middleware.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-83",
          "title": "OpenAPI & Docs",
          "concepts": "Swagger, ReDoc, schemas, examples",
          "example": "# /docs and /openapi.json",
          "exercise": "תעד endpoint עם response model ותיאור.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: Swagger, ReDoc, schemas, examples.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם OpenAPI & Docs בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של OpenAPI & Docs?",
              "a": "להבין וליישם נכון את: Swagger, ReDoc, schemas, examples."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "OpenAPI & Docs הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: Swagger, ReDoc, schemas, examples.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# /docs and /openapi.json",
          "challenge": "תעד endpoint עם response model ותיאור.",
          "objectives": [
            "להסביר מהו OpenAPI & Docs במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא OpenAPI & Docs.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-84",
          "title": "File Uploads",
          "concepts": "UploadFile, multipart",
          "example": "# async def upload(file: UploadFile)",
          "exercise": "בנה endpoint להעלאת CSV.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: UploadFile, multipart.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם File Uploads בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של File Uploads?",
              "a": "להבין וליישם נכון את: UploadFile, multipart."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "File Uploads הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: UploadFile, multipart.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# async def upload(file: UploadFile)",
          "challenge": "בנה endpoint להעלאת CSV.",
          "objectives": [
            "להסביר מהו File Uploads במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא File Uploads.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-85",
          "title": "Background tasks",
          "concepts": "BackgroundTasks and limits",
          "example": "from fastapi import BackgroundTasks",
          "exercise": "שלח פעולה לא קריטית אחרי response.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: BackgroundTasks and limits.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Background tasks בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Background tasks?",
              "a": "להבין וליישם נכון את: BackgroundTasks and limits."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Background tasks הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: BackgroundTasks and limits.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from fastapi import BackgroundTasks",
          "challenge": "שלח פעולה לא קריטית אחרי response.",
          "objectives": [
            "להסביר מהו Background tasks במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Background tasks.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-86",
          "title": "WebSockets",
          "concepts": "persistent connections, realtime basics",
          "example": "from fastapi import WebSocket",
          "exercise": "בנה echo websocket.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: persistent connections, realtime basics.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם WebSockets בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של WebSockets?",
              "a": "להבין וליישם נכון את: persistent connections, realtime basics."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "WebSockets הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: persistent connections, realtime basics.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from fastapi import WebSocket",
          "challenge": "בנה echo websocket.",
          "objectives": [
            "להסביר מהו WebSockets במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא WebSockets.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L10",
      "title": "Level 10 — Async, Concurrency & Performance",
      "difficulty": "Advanced",
      "desc": "asyncio, threads, processes, I/O-bound vs CPU-bound ו-performance.",
      "lessons": [
        {
          "id": "lesson-87",
          "title": "sync vs async",
          "concepts": "blocking, event loop, cooperative multitasking",
          "example": "import asyncio\nasync def main():\n    await asyncio.sleep(1)\nasyncio.run(main())",
          "exercise": "הסבר למה time.sleep בתוך async endpoint בעייתי.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: blocking, event loop, cooperative multitasking.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם sync vs async בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של sync vs async?",
              "a": "להבין וליישם נכון את: blocking, event loop, cooperative multitasking."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "sync vs async הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: blocking, event loop, cooperative multitasking.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import asyncio\nasync def main():\n    await asyncio.sleep(1)\nasyncio.run(main())",
          "challenge": "הסבר למה time.sleep בתוך async endpoint בעייתי.",
          "objectives": [
            "להסביר מהו sync vs async במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא sync vs async.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-88",
          "title": "asyncio tasks",
          "concepts": "create_task, gather, cancellation",
          "example": "results = await asyncio.gather(fetch_a(), fetch_b())",
          "exercise": "הרץ שתי פעולות I/O במקביל.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: create_task, gather, cancellation.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם asyncio tasks בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של asyncio tasks?",
              "a": "להבין וליישם נכון את: create_task, gather, cancellation."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "asyncio tasks הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: create_task, gather, cancellation.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "results = await asyncio.gather(fetch_a(), fetch_b())",
          "challenge": "הרץ שתי פעולות I/O במקביל.",
          "objectives": [
            "להסביר מהו asyncio tasks במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא asyncio tasks.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-89",
          "title": "Timeouts",
          "concepts": "asyncio.timeout, cancellation safety",
          "example": "import asyncio\n# async with asyncio.timeout(2): ...",
          "exercise": "הוסף timeout לקריאת API.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: asyncio.timeout, cancellation safety.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Timeouts בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Timeouts?",
              "a": "להבין וליישם נכון את: asyncio.timeout, cancellation safety."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Timeouts הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: asyncio.timeout, cancellation safety.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import asyncio\n# async with asyncio.timeout(2): ...",
          "challenge": "הוסף timeout לקריאת API.",
          "objectives": [
            "להסביר מהו Timeouts במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Timeouts.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-90",
          "title": "Threads",
          "concepts": "ThreadPoolExecutor, GIL concepts",
          "example": "from concurrent.futures import ThreadPoolExecutor",
          "exercise": "זהה משימה שמתאימה ל-thread.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: ThreadPoolExecutor, GIL concepts.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Threads בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Threads?",
              "a": "להבין וליישם נכון את: ThreadPoolExecutor, GIL concepts."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Threads הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: ThreadPoolExecutor, GIL concepts.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from concurrent.futures import ThreadPoolExecutor",
          "challenge": "זהה משימה שמתאימה ל-thread.",
          "objectives": [
            "להסביר מהו Threads במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Threads.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-91",
          "title": "Processes",
          "concepts": "ProcessPoolExecutor, CPU-bound work",
          "example": "from concurrent.futures import ProcessPoolExecutor",
          "exercise": "זהה משימה שמתאימה ל-process.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: ProcessPoolExecutor, CPU-bound work.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Processes בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Processes?",
              "a": "להבין וליישם נכון את: ProcessPoolExecutor, CPU-bound work."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Processes הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: ProcessPoolExecutor, CPU-bound work.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from concurrent.futures import ProcessPoolExecutor",
          "challenge": "זהה משימה שמתאימה ל-process.",
          "objectives": [
            "להסביר מהו Processes במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Processes.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-92",
          "title": "Profiling",
          "concepts": "timeit, cProfile, hot paths",
          "example": "python -m cProfile app.py",
          "exercise": "מדוד לפני ואחרי optimization.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: timeit, cProfile, hot paths.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Profiling בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Profiling?",
              "a": "להבין וליישם נכון את: timeit, cProfile, hot paths."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Profiling הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: timeit, cProfile, hot paths.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "python -m cProfile app.py",
          "challenge": "מדוד לפני ואחרי optimization.",
          "objectives": [
            "להסביר מהו Profiling במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Profiling.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-93",
          "title": "Caching",
          "concepts": "functools.cache/lru_cache, external cache concepts",
          "example": "from functools import lru_cache\n@lru_cache\ndef f(x): return x*x",
          "exercise": "הוסף cache לפונקציה טהורה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: functools.cache/lru_cache, external cache concepts.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Caching בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Caching?",
              "a": "להבין וליישם נכון את: functools.cache/lru_cache, external cache concepts."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Caching הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: functools.cache/lru_cache, external cache concepts.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "from functools import lru_cache\n@lru_cache\ndef f(x): return x*x",
          "challenge": "הוסף cache לפונקציה טהורה.",
          "objectives": [
            "להסביר מהו Caching במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Caching.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L11",
      "title": "Level 11 — Security, Auth & Production API",
      "difficulty": "Advanced",
      "desc": "Authentication, authorization, secrets, input validation, API security ו-production concerns.",
      "lessons": [
        {
          "id": "lesson-94",
          "title": "Password security",
          "concepts": "hashing vs encryption, salts, Argon2/bcrypt concepts",
          "example": "# never store plaintext passwords",
          "exercise": "תאר flow נכון לשמירת סיסמה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: hashing vs encryption, salts, Argon2/bcrypt concepts.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Password security בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Password security?",
              "a": "להבין וליישם נכון את: hashing vs encryption, salts, Argon2/bcrypt concepts."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Password security הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: hashing vs encryption, salts, Argon2/bcrypt concepts.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# never store plaintext passwords",
          "challenge": "תאר flow נכון לשמירת סיסמה.",
          "objectives": [
            "להסביר מהו Password security במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Password security.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-95",
          "title": "JWT",
          "concepts": "claims, signature, expiry, refresh concepts",
          "example": "# access token + exp + sub",
          "exercise": "תכנן access/refresh token flow.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: claims, signature, expiry, refresh concepts.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם JWT בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של JWT?",
              "a": "להבין וליישם נכון את: claims, signature, expiry, refresh concepts."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "JWT הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: claims, signature, expiry, refresh concepts.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# access token + exp + sub",
          "challenge": "תכנן access/refresh token flow.",
          "objectives": [
            "להסביר מהו JWT במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא JWT.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-96",
          "title": "OAuth2 concepts",
          "concepts": "authorization flows, scopes, bearer tokens",
          "example": "# Authorization: Bearer <token>",
          "exercise": "מפה scopes ל-permissions.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: authorization flows, scopes, bearer tokens.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם OAuth2 concepts בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של OAuth2 concepts?",
              "a": "להבין וליישם נכון את: authorization flows, scopes, bearer tokens."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "OAuth2 concepts הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: authorization flows, scopes, bearer tokens.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# Authorization: Bearer <token>",
          "challenge": "מפה scopes ל-permissions.",
          "objectives": [
            "להסביר מהו OAuth2 concepts במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא OAuth2 concepts.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-97",
          "title": "RBAC/ABAC",
          "concepts": "roles vs attributes, authorization checks",
          "example": "def can_delete(user, resource): ...",
          "exercise": "תכנן הרשאות admin/creator/viewer.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: roles vs attributes, authorization checks.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם RBAC/ABAC בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של RBAC/ABAC?",
              "a": "להבין וליישם נכון את: roles vs attributes, authorization checks."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "RBAC/ABAC הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: roles vs attributes, authorization checks.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def can_delete(user, resource): ...",
          "challenge": "תכנן הרשאות admin/creator/viewer.",
          "objectives": [
            "להסביר מהו RBAC/ABAC במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא RBAC/ABAC.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-98",
          "title": "CORS & CSRF",
          "concepts": "origins, credentials, cookie vs bearer risks",
          "example": "# configure allowed origins explicitly",
          "exercise": "הסבר מתי CSRF רלוונטי.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: origins, credentials, cookie vs bearer risks.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם CORS & CSRF בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של CORS & CSRF?",
              "a": "להבין וליישם נכון את: origins, credentials, cookie vs bearer risks."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "CORS & CSRF הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: origins, credentials, cookie vs bearer risks.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# configure allowed origins explicitly",
          "challenge": "הסבר מתי CSRF רלוונטי.",
          "objectives": [
            "להסביר מהו CORS & CSRF במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא CORS & CSRF.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-99",
          "title": "Validation & Injection",
          "concepts": "SQL injection, command injection, path traversal",
          "example": "# use bound parameters",
          "exercise": "זהה 5 trust boundaries ב-API.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: SQL injection, command injection, path traversal.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Validation & Injection בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Validation & Injection?",
              "a": "להבין וליישם נכון את: SQL injection, command injection, path traversal."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Validation & Injection הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: SQL injection, command injection, path traversal.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# use bound parameters",
          "challenge": "זהה 5 trust boundaries ב-API.",
          "objectives": [
            "להסביר מהו Validation & Injection במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Validation & Injection.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-100",
          "title": "Rate limiting",
          "concepts": "abuse controls, quotas, backoff",
          "example": "# 429 Too Many Requests",
          "exercise": "תכנן limit ל-login ול-public API.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: abuse controls, quotas, backoff.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Rate limiting בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Rate limiting?",
              "a": "להבין וליישם נכון את: abuse controls, quotas, backoff."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Rate limiting הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: abuse controls, quotas, backoff.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# 429 Too Many Requests",
          "challenge": "תכנן limit ל-login ול-public API.",
          "objectives": [
            "להסביר מהו Rate limiting במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Rate limiting.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-101",
          "title": "Secrets & config",
          "concepts": "env vars, secret managers, rotation",
          "example": "DATABASE_URL = os.getenv('DATABASE_URL')",
          "exercise": "בנה config שלא חושף secrets.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: env vars, secret managers, rotation.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Secrets & config בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Secrets & config?",
              "a": "להבין וליישם נכון את: env vars, secret managers, rotation."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Secrets & config הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: env vars, secret managers, rotation.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "DATABASE_URL = os.getenv('DATABASE_URL')",
          "challenge": "בנה config שלא חושף secrets.",
          "objectives": [
            "להסביר מהו Secrets & config במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Secrets & config.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L12",
      "title": "Level 12 — Architecture, Docker & CI/CD",
      "difficulty": "Advanced",
      "desc": "מבנה מערכת, Clean Architecture, Docker, GitHub Actions, deployment ו-observability.",
      "lessons": [
        {
          "id": "lesson-102",
          "title": "Layered architecture",
          "concepts": "API/service/repository/domain boundaries",
          "example": "router -> service -> repository -> database",
          "exercise": "פצל feature ל-router/service/repository.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: API/service/repository/domain boundaries.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Layered architecture בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Layered architecture?",
              "a": "להבין וליישם נכון את: API/service/repository/domain boundaries."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Layered architecture הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: API/service/repository/domain boundaries.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "router -> service -> repository -> database",
          "challenge": "פצל feature ל-router/service/repository.",
          "objectives": [
            "להסביר מהו Layered architecture במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Layered architecture.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-103",
          "title": "Clean Architecture",
          "concepts": "dependency rule, ports/adapters concepts",
          "example": "domain <- application <- adapters",
          "exercise": "שרטט dependencies בלי שה-domain מכיר FastAPI.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: dependency rule, ports/adapters concepts.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Clean Architecture בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Clean Architecture?",
              "a": "להבין וליישם נכון את: dependency rule, ports/adapters concepts."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Clean Architecture הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: dependency rule, ports/adapters concepts.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "domain <- application <- adapters",
          "challenge": "שרטט dependencies בלי שה-domain מכיר FastAPI.",
          "objectives": [
            "להסביר מהו Clean Architecture במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Clean Architecture.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-104",
          "title": "Repository pattern",
          "concepts": "persistence abstraction, tradeoffs",
          "example": "class UserRepository(Protocol): ...",
          "exercise": "כתוב fake repository ל-tests.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: persistence abstraction, tradeoffs.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Repository pattern בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Repository pattern?",
              "a": "להבין וליישם נכון את: persistence abstraction, tradeoffs."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Repository pattern הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: persistence abstraction, tradeoffs.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class UserRepository(Protocol): ...",
          "challenge": "כתוב fake repository ל-tests.",
          "objectives": [
            "להסביר מהו Repository pattern במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Repository pattern.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-105",
          "title": "Service layer",
          "concepts": "business logic orchestration",
          "example": "class UserService:\n    def __init__(self, repo): self.repo=repo",
          "exercise": "העבר לוגיקה עסקית מה-router לשירות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: business logic orchestration.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Service layer בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Service layer?",
              "a": "להבין וליישם נכון את: business logic orchestration."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Service layer הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: business logic orchestration.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class UserService:\n    def __init__(self, repo): self.repo=repo",
          "challenge": "העבר לוגיקה עסקית מה-router לשירות.",
          "objectives": [
            "להסביר מהו Service layer במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Service layer.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-106",
          "title": "Docker basics",
          "concepts": "images, containers, Dockerfile, layers",
          "example": "FROM python:3.14-slim\nWORKDIR /app\nCOPY . .",
          "exercise": "כתוב Dockerfile ל-FastAPI.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: images, containers, Dockerfile, layers.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Docker basics בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Docker basics?",
              "a": "להבין וליישם נכון את: images, containers, Dockerfile, layers."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Docker basics הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: images, containers, Dockerfile, layers.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "FROM python:3.14-slim\nWORKDIR /app\nCOPY . .",
          "challenge": "כתוב Dockerfile ל-FastAPI.",
          "objectives": [
            "להסביר מהו Docker basics במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Docker basics.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-107",
          "title": "Docker Compose",
          "concepts": "API + DB + cache concepts",
          "example": "services:\n  api:\n    build: .\n  db:\n    image: postgres",
          "exercise": "תכנן compose מקומי עם Postgres.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: API + DB + cache concepts.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Docker Compose בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Docker Compose?",
              "a": "להבין וליישם נכון את: API + DB + cache concepts."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Docker Compose הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: API + DB + cache concepts.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "services:\n  api:\n    build: .\n  db:\n    image: postgres",
          "challenge": "תכנן compose מקומי עם Postgres.",
          "objectives": [
            "להסביר מהו Docker Compose במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Docker Compose.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-108",
          "title": "GitHub Actions",
          "concepts": "workflow, test/lint/build gates",
          "example": "name: CI\non: [push, pull_request]",
          "exercise": "צור CI שרץ pytest ו-lint.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: workflow, test/lint/build gates.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם GitHub Actions בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של GitHub Actions?",
              "a": "להבין וליישם נכון את: workflow, test/lint/build gates."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "GitHub Actions הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: workflow, test/lint/build gates.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "name: CI\non: [push, pull_request]",
          "challenge": "צור CI שרץ pytest ו-lint.",
          "objectives": [
            "להסביר מהו GitHub Actions במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא GitHub Actions.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-109",
          "title": "Observability",
          "concepts": "logs, metrics, traces, health/readiness",
          "example": "# structured logs + request_id",
          "exercise": "הגדר מה היית מודד ב-production.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: logs, metrics, traces, health/readiness.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Observability בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Observability?",
              "a": "להבין וליישם נכון את: logs, metrics, traces, health/readiness."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Observability הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: logs, metrics, traces, health/readiness.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# structured logs + request_id",
          "challenge": "הגדר מה היית מודד ב-production.",
          "objectives": [
            "להסביר מהו Observability במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Observability.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-110",
          "title": "Deployment",
          "concepts": "workers, reverse proxy, HTTPS, envs, migrations",
          "example": "# build -> test -> migrate -> deploy",
          "exercise": "כתוב checklist ל-deploy בטוח.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: workers, reverse proxy, HTTPS, envs, migrations.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Deployment בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Deployment?",
              "a": "להבין וליישם נכון את: workers, reverse proxy, HTTPS, envs, migrations."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Deployment הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: workers, reverse proxy, HTTPS, envs, migrations.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# build -> test -> migrate -> deploy",
          "challenge": "כתוב checklist ל-deploy בטוח.",
          "objectives": [
            "להסביר מהו Deployment במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Deployment.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L13",
      "title": "Level 13 — Professional Python",
      "difficulty": "Expert",
      "desc": "Internals, descriptors, metaprogramming, memory, CPython concepts ו-codebase scale.",
      "lessons": [
        {
          "id": "lesson-111",
          "title": "Python data model",
          "concepts": "dunder methods, protocols, repr/eq/hash",
          "example": "class Money:\n    def __repr__(self): return 'Money(...)'",
          "exercise": "ממש __repr__, __eq__, __hash__ בצורה עקבית.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: dunder methods, protocols, repr/eq/hash.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Python data model בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Python data model?",
              "a": "להבין וליישם נכון את: dunder methods, protocols, repr/eq/hash."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Python data model הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: dunder methods, protocols, repr/eq/hash.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class Money:\n    def __repr__(self): return 'Money(...)'",
          "challenge": "ממש __repr__, __eq__, __hash__ בצורה עקבית.",
          "objectives": [
            "להסביר מהו Python data model במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Python data model.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-112",
          "title": "Descriptors",
          "concepts": "__get__/__set__, attribute access",
          "example": "class Positive:\n    def __set__(self,obj,value):\n        if value<0: raise ValueError",
          "exercise": "בנה descriptor לוולידציה.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: __get__/__set__, attribute access.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Descriptors בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Descriptors?",
              "a": "להבין וליישם נכון את: __get__/__set__, attribute access."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Descriptors הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: __get__/__set__, attribute access.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class Positive:\n    def __set__(self,obj,value):\n        if value<0: raise ValueError",
          "challenge": "בנה descriptor לוולידציה.",
          "objectives": [
            "להסביר מהו Descriptors במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Descriptors.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-113",
          "title": "Closures",
          "concepts": "free variables, nonlocal, function factories",
          "example": "def multiplier(k):\n    return lambda x: x*k",
          "exercise": "צור function factory עם state.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: free variables, nonlocal, function factories.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Closures בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Closures?",
              "a": "להבין וליישם נכון את: free variables, nonlocal, function factories."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Closures הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: free variables, nonlocal, function factories.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "def multiplier(k):\n    return lambda x: x*k",
          "challenge": "צור function factory עם state.",
          "objectives": [
            "להסביר מהו Closures במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Closures.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-114",
          "title": "Memory model",
          "concepts": "references, mutability, shallow/deep copy",
          "example": "import copy",
          "exercise": "הדגם bug שנובע מ-shallow copy.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: references, mutability, shallow/deep copy.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Memory model בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Memory model?",
              "a": "להבין וליישם נכון את: references, mutability, shallow/deep copy."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Memory model הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: references, mutability, shallow/deep copy.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import copy",
          "challenge": "הדגם bug שנובע מ-shallow copy.",
          "objectives": [
            "להסביר מהו Memory model במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Memory model.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-115",
          "title": "GIL & free-threading concepts",
          "concepts": "CPython execution model, concurrency implications",
          "example": "# implementation details matter for performance",
          "exercise": "הסבר למה לא מניחים ש-thread תמיד מאיץ CPU.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: CPython execution model, concurrency implications.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם GIL & free-threading concepts בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של GIL & free-threading concepts?",
              "a": "להבין וליישם נכון את: CPython execution model, concurrency implications."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "GIL & free-threading concepts הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: CPython execution model, concurrency implications.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# implementation details matter for performance",
          "challenge": "הסבר למה לא מניחים ש-thread תמיד מאיץ CPU.",
          "objectives": [
            "להסביר מהו GIL & free-threading concepts במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא GIL & free-threading concepts.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-116",
          "title": "Introspection",
          "concepts": "inspect, getattr/setattr, vars, callable",
          "example": "import inspect\nprint(inspect.signature(len))",
          "exercise": "בנה mini plugin loader.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: inspect, getattr/setattr, vars, callable.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Introspection בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Introspection?",
              "a": "להבין וליישם נכון את: inspect, getattr/setattr, vars, callable."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Introspection הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: inspect, getattr/setattr, vars, callable.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "import inspect\nprint(inspect.signature(len))",
          "challenge": "בנה mini plugin loader.",
          "objectives": [
            "להסביר מהו Introspection במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Introspection.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-117",
          "title": "Metaclasses",
          "concepts": "class creation hooks, when not to use them",
          "example": "class Meta(type):\n    pass",
          "exercise": "הסבר מקרה שבו decorator עדיף על metaclass.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: class creation hooks, when not to use them.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Metaclasses בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Metaclasses?",
              "a": "להבין וליישם נכון את: class creation hooks, when not to use them."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Metaclasses הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: class creation hooks, when not to use them.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "class Meta(type):\n    pass",
          "challenge": "הסבר מקרה שבו decorator עדיף על metaclass.",
          "objectives": [
            "להסביר מהו Metaclasses במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Metaclasses.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-118",
          "title": "Performance engineering",
          "concepts": "complexity, allocation, vectorization concepts",
          "example": "sum(range(1_000_000))",
          "exercise": "בצע benchmark והשווה שתי implementations.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: complexity, allocation, vectorization concepts.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Performance engineering בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Performance engineering?",
              "a": "להבין וליישם נכון את: complexity, allocation, vectorization concepts."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Performance engineering הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: complexity, allocation, vectorization concepts.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "sum(range(1_000_000))",
          "challenge": "בצע benchmark והשווה שתי implementations.",
          "objectives": [
            "להסביר מהו Performance engineering במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Performance engineering.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    },
    {
      "id": "L14",
      "title": "Level 14 — Capstone Projects",
      "difficulty": "Expert",
      "desc": "פרויקטים שמחברים את כל החומר ומייצרים תיק עבודות אמיתי.",
      "lessons": [
        {
          "id": "lesson-119",
          "title": "CLI Task Manager",
          "concepts": "CLI, files/DB, validation, tests, packaging",
          "example": "# deliverable: installable CLI",
          "exercise": "בנה CLI מלא עם CRUD, pytest ו-pyproject.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: CLI, files/DB, validation, tests, packaging.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם CLI Task Manager בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של CLI Task Manager?",
              "a": "להבין וליישם נכון את: CLI, files/DB, validation, tests, packaging."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "CLI Task Manager הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: CLI, files/DB, validation, tests, packaging.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# deliverable: installable CLI",
          "challenge": "בנה CLI מלא עם CRUD, pytest ו-pyproject.",
          "objectives": [
            "להסביר מהו CLI Task Manager במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא CLI Task Manager.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-120",
          "title": "REST Task API",
          "concepts": "FastAPI, Pydantic, SQLAlchemy, migrations, tests",
          "example": "# deliverable: documented REST API",
          "exercise": "בנה CRUD API עם PostgreSQL ו-integration tests.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: FastAPI, Pydantic, SQLAlchemy, migrations, tests.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם REST Task API בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של REST Task API?",
              "a": "להבין וליישם נכון את: FastAPI, Pydantic, SQLAlchemy, migrations, tests."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "REST Task API הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: FastAPI, Pydantic, SQLAlchemy, migrations, tests.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# deliverable: documented REST API",
          "challenge": "בנה CRUD API עם PostgreSQL ו-integration tests.",
          "objectives": [
            "להסביר מהו REST Task API במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא REST Task API.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-121",
          "title": "Auth Service",
          "concepts": "JWT/OAuth2 concepts, RBAC, rate limiting",
          "example": "# deliverable: auth module",
          "exercise": "בנה register/login/refresh/me עם הרשאות.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: JWT/OAuth2 concepts, RBAC, rate limiting.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Auth Service בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Auth Service?",
              "a": "להבין וליישם נכון את: JWT/OAuth2 concepts, RBAC, rate limiting."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Auth Service הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: JWT/OAuth2 concepts, RBAC, rate limiting.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# deliverable: auth module",
          "challenge": "בנה register/login/refresh/me עם הרשאות.",
          "objectives": [
            "להסביר מהו Auth Service במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Auth Service.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-122",
          "title": "Async Aggregator",
          "concepts": "async HTTP, timeouts, retries, caching",
          "example": "# deliverable: concurrent aggregator",
          "exercise": "בנה שירות שמאגד 3 APIs במקביל.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: async HTTP, timeouts, retries, caching.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Async Aggregator בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Async Aggregator?",
              "a": "להבין וליישם נכון את: async HTTP, timeouts, retries, caching."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Async Aggregator הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: async HTTP, timeouts, retries, caching.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# deliverable: concurrent aggregator",
          "challenge": "בנה שירות שמאגד 3 APIs במקביל.",
          "objectives": [
            "להסביר מהו Async Aggregator במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Async Aggregator.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-123",
          "title": "Production API",
          "concepts": "Docker, CI, config, logging, health, deployment",
          "example": "# deliverable: deployable service",
          "exercise": "הוסף Docker, CI, observability ו-deployment docs.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: Docker, CI, config, logging, health, deployment.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Production API בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Production API?",
              "a": "להבין וליישם נכון את: Docker, CI, config, logging, health, deployment."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Production API הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: Docker, CI, config, logging, health, deployment.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# deliverable: deployable service",
          "challenge": "הוסף Docker, CI, observability ו-deployment docs.",
          "objectives": [
            "להסביר מהו Production API במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Production API.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-124",
          "title": "Testing Portfolio",
          "concepts": "unit/integration/e2e strategy, factories, mocks, coverage",
          "example": "# deliverable: serious test suite",
          "exercise": "העלה quality gate עם suite אמין ומהיר.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: unit/integration/e2e strategy, factories, mocks, coverage.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Testing Portfolio בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Testing Portfolio?",
              "a": "להבין וליישם נכון את: unit/integration/e2e strategy, factories, mocks, coverage."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Testing Portfolio הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: unit/integration/e2e strategy, factories, mocks, coverage.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# deliverable: serious test suite",
          "challenge": "העלה quality gate עם suite אמין ומהיר.",
          "objectives": [
            "להסביר מהו Testing Portfolio במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Testing Portfolio.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        },
        {
          "id": "lesson-125",
          "title": "Final Architecture Project",
          "concepts": "clean boundaries, DB, auth, background work, tests, docs",
          "example": "# deliverable: portfolio-grade backend",
          "exercise": "בנה backend של מוצר אמיתי לפי כללי production.",
          "theory": [
            "מטרת השיעור היא להבין לעומק: clean boundaries, DB, auth, background work, tests, docs.",
            "אל תסתפק בזכירת syntax. ודא שאתה יודע להסביר מה קורה בזמן ריצה, מה ה-trade-offs, ואיך מזהים שימוש לא נכון.",
            "בכל נושא: כתוב דוגמה קטנה, שנה אותה בכוונה כך שתיכשל, קרא את השגיאה, ואז תקן. זו דרך מרכזית לבנות אינטואיציה."
          ],
          "check": "האם אתה מסוגל להסביר וליישם Final Architecture Project בלי להעתיק דוגמה?",
          "quiz": [
            {
              "q": "מה המטרה המרכזית של Final Architecture Project?",
              "a": "להבין וליישם נכון את: clean boundaries, DB, auth, background work, tests, docs."
            },
            {
              "q": "מה נחשב סימן שהנושא באמת מובן?",
              "a": "יכולת לכתוב פתרון חדש, להסביר את הבחירות, לזהות edge cases ולבדוק אותו."
            }
          ],
          "why": "Final Architecture Project הוא חלק חשוב בכתיבת Python מקצועי. המטרה היא להבין לא רק את התחביר אלא גם את ההתנהגות בזמן ריצה, את מקרי הקצה ואת הבחירה הנכונה בכלי.",
          "deep": [
            "המוקד של השיעור: clean boundaries, DB, auth, background work, tests, docs.",
            "בדוק מה הקלט, מה הפלט, איזה state משתנה ומה נשאר immutable.",
            "אחרי שהדוגמה עובדת, שנה אותה בכוונה כדי לייצר edge case או exception."
          ],
          "mistakes": [
            "להעתיק syntax בלי להבין למה הוא עובד.",
            "לבדוק רק happy path ולהתעלם מ-None, ערכים ריקים, גבולות וקלט שגוי."
          ],
          "starter": "# deliverable: portfolio-grade backend",
          "challenge": "בנה backend של מוצר אמיתי לפי כללי production.",
          "objectives": [
            "להסביר מהו Final Architecture Project במילים שלך.",
            "לכתוב דוגמה חדשה ללא העתקה.",
            "לזהות לפחות edge case או טעות נפוצה אחת.",
            "להשתמש בנושא בתרגיל מעשי."
          ],
          "fill": {
            "prompt": "השלם את החסר בדוגמה בנושא Final Architecture Project.",
            "code": "language = 'Python'\nprint(____)",
            "answer": "language"
          }
        }
      ]
    }
  ]
};
