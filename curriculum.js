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
          },
          "exercise_solution": "# פתרון אפשרי לשיעור: איך Python עובד\n# התחל מהעיקרון שנלמד בשיעור והרכב ממנו פתרון קטן וברור.\n\nname = 'Python'\nversion = 3.14\nprint(name, version)\n\n# בדוק גם edge case אחד לפחות וכתוב assert או הדפסה שמוכיחה שהתוצאה נכונה.",
          "challenge_solution": "# כיוון מלא לפתרון Challenge — איך Python עובד\n# א. פצל את הבעיה לצעדים קטנים.\n# ב. בצע validation לקלט.\n# ג. השתמש בכלי שלמדת בשיעור: Interpreter, CPython, source code, bytecode, runtime, REPL.\n# ד. טפל במקרה קצה אחד לפחות.\n# ה. הוסף בדיקה שמוודאת את התוצאה.\n#\n# נקודת התחלה:\nname = 'Python'\nversion = 3.14\nprint(name, version)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי איך Python עובד פותר.",
            "עבור על התחביר המרכזי: Interpreter, CPython, source code, bytecode, runtime, REPL.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-איך Python עובד, תקן אותה והרץ שוב.",
            "code": "name = 'Python'\nversion = 3.14\nprint(name, version)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# פתרון אפשרי לשיעור: התקנה וגרסאות\n# התחל מהעיקרון שנלמד בשיעור והרכב ממנו פתרון קטן וברור.\n\npython --version\n\n# בדוק גם edge case אחד לפחות וכתוב assert או הדפסה שמוכיחה שהתוצאה נכונה.",
          "challenge_solution": "# כיוון מלא לפתרון Challenge — התקנה וגרסאות\n# א. פצל את הבעיה לצעדים קטנים.\n# ב. בצע validation לקלט.\n# ג. השתמש בכלי שלמדת בשיעור: Python 3.14, python --version, PATH, Windows/macOS/Linux.\n# ד. טפל במקרה קצה אחד לפחות.\n# ה. הוסף בדיקה שמוודאת את התוצאה.\n#\n# נקודת התחלה:\npython --version",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי התקנה וגרסאות פותר.",
            "עבור על התחביר המרכזי: Python 3.14, python --version, PATH, Windows/macOS/Linux.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-התקנה וגרסאות, תקן אותה והרץ שוב.",
            "code": "python --version",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# פתרון אפשרי לשיעור: Terminal ופקודות בסיס\n# התחל מהעיקרון שנלמד בשיעור והרכב ממנו פתרון קטן וברור.\n\npython main.py\n\n# בדוק גם edge case אחד לפחות וכתוב assert או הדפסה שמוכיחה שהתוצאה נכונה.",
          "challenge_solution": "# כיוון מלא לפתרון Challenge — Terminal ופקודות בסיס\n# א. פצל את הבעיה לצעדים קטנים.\n# ב. בצע validation לקלט.\n# ג. השתמש בכלי שלמדת בשיעור: pwd/cd/ls, mkdir, files, running scripts.\n# ד. טפל במקרה קצה אחד לפחות.\n# ה. הוסף בדיקה שמוודאת את התוצאה.\n#\n# נקודת התחלה:\npython main.py",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Terminal ופקודות בסיס פותר.",
            "עבור על התחביר המרכזי: pwd/cd/ls, mkdir, files, running scripts.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Terminal ופקודות בסיס, תקן אותה והרץ שוב.",
            "code": "python main.py",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# פתרון אפשרי לשיעור: Virtual Environments\n# התחל מהעיקרון שנלמד בשיעור והרכב ממנו פתרון קטן וברור.\n\npython -m venv .venv\n\n# בדוק גם edge case אחד לפחות וכתוב assert או הדפסה שמוכיחה שהתוצאה נכונה.",
          "challenge_solution": "# כיוון מלא לפתרון Challenge — Virtual Environments\n# א. פצל את הבעיה לצעדים קטנים.\n# ב. בצע validation לקלט.\n# ג. השתמש בכלי שלמדת בשיעור: venv, activation, isolation, requirements.\n# ד. טפל במקרה קצה אחד לפחות.\n# ה. הוסף בדיקה שמוודאת את התוצאה.\n#\n# נקודת התחלה:\npython -m venv .venv",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Virtual Environments פותר.",
            "עבור על התחביר המרכזי: venv, activation, isolation, requirements.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Virtual Environments, תקן אותה והרץ שוב.",
            "code": "python -m venv .venv",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# פתרון אפשרי לשיעור: pip ו-Packages\n# התחל מהעיקרון שנלמד בשיעור והרכב ממנו פתרון קטן וברור.\n\npython -m pip install requests\n\n# בדוק גם edge case אחד לפחות וכתוב assert או הדפסה שמוכיחה שהתוצאה נכונה.",
          "challenge_solution": "# כיוון מלא לפתרון Challenge — pip ו-Packages\n# א. פצל את הבעיה לצעדים קטנים.\n# ב. בצע validation לקלט.\n# ג. השתמש בכלי שלמדת בשיעור: PyPI, install/uninstall/list/freeze, dependency pinning.\n# ד. טפל במקרה קצה אחד לפחות.\n# ה. הוסף בדיקה שמוודאת את התוצאה.\n#\n# נקודת התחלה:\npython -m pip install requests",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי pip ו-Packages פותר.",
            "עבור על התחביר המרכזי: PyPI, install/uninstall/list/freeze, dependency pinning.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-pip ו-Packages, תקן אותה והרץ שוב.",
            "code": "python -m pip install requests",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# פתרון אפשרי לשיעור: VS Code / PyCharm\n# התחל מהעיקרון שנלמד בשיעור והרכב ממנו פתרון קטן וברור.\n\nbreakpoint()\n\n# בדוק גם edge case אחד לפחות וכתוב assert או הדפסה שמוכיחה שהתוצאה נכונה.",
          "challenge_solution": "# כיוון מלא לפתרון Challenge — VS Code / PyCharm\n# א. פצל את הבעיה לצעדים קטנים.\n# ב. בצע validation לקלט.\n# ג. השתמש בכלי שלמדת בשיעור: interpreter selection, debugger, breakpoints, formatting.\n# ד. טפל במקרה קצה אחד לפחות.\n# ה. הוסף בדיקה שמוודאת את התוצאה.\n#\n# נקודת התחלה:\nbreakpoint()",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי VS Code / PyCharm פותר.",
            "עבור על התחביר המרכזי: interpreter selection, debugger, breakpoints, formatting.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-VS Code / PyCharm, תקן אותה והרץ שוב.",
            "code": "breakpoint()",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# פתרון אפשרי לשיעור: Git למפתח Python\n# התחל מהעיקרון שנלמד בשיעור והרכב ממנו פתרון קטן וברור.\n\ngit status\n\n# בדוק גם edge case אחד לפחות וכתוב assert או הדפסה שמוכיחה שהתוצאה נכונה.",
          "challenge_solution": "# כיוון מלא לפתרון Challenge — Git למפתח Python\n# א. פצל את הבעיה לצעדים קטנים.\n# ב. בצע validation לקלט.\n# ג. השתמש בכלי שלמדת בשיעור: init, status, add, commit, branch, .gitignore.\n# ד. טפל במקרה קצה אחד לפחות.\n# ה. הוסף בדיקה שמוודאת את התוצאה.\n#\n# נקודת התחלה:\ngit status",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Git למפתח Python פותר.",
            "עבור על התחביר המרכזי: init, status, add, commit, branch, .gitignore.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Git למפתח Python, תקן אותה והרץ שוב.",
            "code": "git status",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "name = \"Dana\"\nage = 30\nheight = 1.72\nis_active = True\nnothing = None\n\nfor value in [name, age, height, is_active, nothing]:\n    print(value, type(value))",
          "challenge_solution": "a = [1, 2]\nb = a\nb.append(3)\n\nprint(a)          # [1, 2, 3]\nprint(b)          # [1, 2, 3]\nprint(a is b)     # True\n\n# a ו-b מצביעים לאותו list בזיכרון, לכן mutation דרך b נראה גם דרך a.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי משתנים ושמות פותר.",
            "עבור על התחביר המרכזי: assignment, naming, dynamic typing, identity.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-משתנים ושמות, תקן אותה והרץ שוב.",
            "code": "name = 'Dana'\nage = 28\nis_active = True\nprint(f'{name} is {age}, active={is_active}')",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "price = 100\nvat_rate = 0.18\ndiscount_rate = 0.10\n\nafter_discount = price * (1 - discount_rate)\nfinal_price = after_discount * (1 + vat_rate)\n\nprint(round(final_price, 2))",
          "challenge_solution": "import math\n\nvalue = 0.1 + 0.2\nprint(value)                    # 0.30000000000000004\nprint(value == 0.3)             # False\nprint(math.isclose(value, 0.3)) # True",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Numbers פותר.",
            "עבור על התחביר המרכזי: int, float, complex, arithmetic, rounding.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Numbers, תקן אותה והרץ שוב.",
            "code": "price = 120\nvat = 0.18\nfinal_price = price * (1 + vat)\nprint(round(final_price, 2))",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "full_name = \"  dana cohen  \"\nclean = full_name.strip().title()\n\nparts = clean.split()\ninitials = \"\".join(part[0] for part in parts)\n\nprint(clean)\nprint(initials)\nprint(len(clean))",
          "challenge_solution": "email = \"  Dana.Cohen@Example.COM  \"\nemail = email.strip().lower()\nusername, domain = email.split(\"@\", 1)\n\nprint(username)\nprint(domain)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Strings פותר.",
            "עבור על התחביר המרכזי: quotes, indexing, slicing, methods, immutability.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Strings, תקן אותה והרץ שוב.",
            "code": "language = 'Python'\nprint(language[:3])\nprint(language[-1])",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "items = [\n    (\"Keyboard\", 249.90),\n    (\"Mouse\", 99.50),\n    (\"Cable\", 19.00),\n]\n\nfor name, price in items:\n    print(f\"{name:<12} {price:>8.2f}\")",
          "challenge_solution": "product = \"Laptop\"\nprice = 3999.9\nquantity = 2\ntotal = price * quantity\n\nprint(f\"{product:<15} x{quantity:>2}\")\nprint(f\"{'Total':<15} {total:>10,.2f}\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי f-strings פותר.",
            "עבור על התחביר המרכזי: formatting, precision, alignment, expressions.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-f-strings, תקן אותה והרץ שוב.",
            "code": "price = 12.3456\nprint(f'{price:.2f}')",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def describe(value):\n    if value is None:\n        return \"None\"\n    if value == \"\":\n        return \"empty string\"\n    return \"real value\"\n\nprint(describe(None))\nprint(describe(\"\"))\nprint(describe(\"Python\"))",
          "challenge_solution": "values = [None, \"\", 0, False, [], \"0\", [0]]\n\nfor value in values:\n    print(repr(value), \"truthy\" if value else \"falsy\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Booleans ו-None פותר.",
            "עבור על התחביר המרכזי: truthiness, comparisons, is vs ==.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Booleans ו-None, תקן אותה והרץ שוב.",
            "code": "value = None\nprint(value is None)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def grade(score):\n    if score >= 90:\n        return \"A\"\n    if score >= 80:\n        return \"B\"\n    if score >= 70:\n        return \"C\"\n    if score >= 60:\n        return \"D\"\n    return \"F\"\n\nprint(grade(87))",
          "challenge_solution": "def validate_age(age):\n    if age < 0:\n        return \"invalid\"\n    if age < 18:\n        return \"child\"\n    if age <= 120:\n        return \"adult\"\n    return \"unlikely age\"\n\nfor age in [-1, 12, 30, 121]:\n    print(age, validate_age(age))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי if / elif / else פותר.",
            "עבור על התחביר המרכזי: branching, nested conditions, guard clauses.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-if / elif / else, תקן אותה והרץ שוב.",
            "code": "score = 87\nprint('pass' if score >= 60 else 'fail')",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "scores = [95, 82, 71]\n\nfor index, score in enumerate(scores, start=1):\n    print(index, score)",
          "challenge_solution": "numbers = [3, 8, 11, 20, 25]\neven_squares = []\n\nfor number in numbers:\n    if number % 2 == 0:\n        even_squares.append(number ** 2)\n\nprint(even_squares)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי for loops פותר.",
            "עבור על התחביר המרכזי: iteration, range, enumerate.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-for loops, תקן אותה והרץ שוב.",
            "code": "for i, x in enumerate(['a','b']):\n    print(i, x)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "commands = iter([\"help\", \"status\", \"exit\"])\n\nwhile True:\n    command = next(commands)\n    if command == \"exit\":\n        break\n    print(\"command:\", command)",
          "challenge_solution": "attempts = 3\ncorrect_pin = \"1234\"\n\nwhile attempts > 0:\n    entered = \"0000\"   # בדוגמה אמיתית: input(...)\n    if entered == correct_pin:\n        print(\"success\")\n        break\n    attempts -= 1\n    print(\"remaining:\", attempts)\n    break  # רק כדי שהדוגמה לא תרוץ בלי סוף",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי while loops פותר.",
            "עבור על התחביר המרכזי: state loops, sentinel, break, continue.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-while loops, תקן אותה והרץ שוב.",
            "code": "n = 3\nwhile n:\n    print(n)\n    n -= 1",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "raw = \"42\"\n\ntry:\n    number = int(raw)\n    print(number * 2)\nexcept ValueError:\n    print(\"Please enter a valid integer\")",
          "challenge_solution": "def parse_positive_int(raw):\n    try:\n        value = int(raw)\n    except ValueError as exc:\n        raise ValueError(\"not an integer\") from exc\n\n    if value <= 0:\n        raise ValueError(\"must be positive\")\n    return value\n\nprint(parse_positive_int(\"12\"))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Input ו-conversion פותר.",
            "עבור על התחביר המרכזי: input, int/float conversion, validation basics.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Input ו-conversion, תקן אותה והרץ שוב.",
            "code": "age = int(input('Age: '))",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "tasks = []\n\ntasks.append(\"learn Python\")\ntasks.append(\"write tests\")\ntasks[0] = \"learn Python deeply\"\ntasks.remove(\"write tests\")\n\nprint(tasks)",
          "challenge_solution": "def unique_in_order(values):\n    seen = set()\n    result = []\n\n    for value in values:\n        if value not in seen:\n            seen.add(value)\n            result.append(value)\n\n    return result\n\nprint(unique_in_order([3, 1, 3, 2, 1, 4]))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Lists פותר.",
            "עבור על התחביר המרכזי: append, extend, insert, remove, slicing, copy.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Lists, תקן אותה והרץ שוב.",
            "code": "nums = [1,2,3]\nnums.append(4)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def min_max(values):\n    return min(values), max(values)\n\nminimum, maximum = min_max([8, 2, 10, 4])\nprint(minimum, maximum)",
          "challenge_solution": "records = [\n    (\"Dana\", 30),\n    (\"Avi\", 25),\n]\n\nfor name, age in records:\n    print(name, age)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Tuples פותר.",
            "עבור על התחביר המרכזי: immutability, unpacking, return tuples.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Tuples, תקן אותה והרץ שוב.",
            "code": "x, y = (10, 20)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "user = {\n    \"id\": 7,\n    \"name\": \"Dana\",\n}\n\nuser[\"email\"] = \"dana@example.com\"\nuser[\"name\"] = \"Dana Cohen\"\n\nprint(user)",
          "challenge_solution": "def frequencies(words):\n    result = {}\n\n    for word in words:\n        result[word] = result.get(word, 0) + 1\n\n    return result\n\nprint(frequencies([\"python\", \"api\", \"python\", \"test\"]))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Dictionaries פותר.",
            "עבור על התחביר המרכזי: keys, values, items, get, setdefault.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Dictionaries, תקן אותה והרץ שוב.",
            "code": "user = {'id': 1, 'name':'Dana'}\nprint(user.get('name'))",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "a = [1, 2, 3, 4]\nb = [3, 4, 5]\n\ncommon = set(a) & set(b)\nprint(common)",
          "challenge_solution": "values = [\"a\", \"b\", \"a\", \"c\", \"b\"]\nduplicates = {x for x in values if values.count(x) > 1}\nprint(duplicates)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Sets פותר.",
            "עבור על התחביר המרכזי: uniqueness, union, intersection, difference.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Sets, תקן אותה והרץ שוב.",
            "code": "a={1,2,3}; b={3,4}\nprint(a & b)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "users = [\n    {\"id\": 1, \"name\": \"Dana\"},\n    {\"id\": 2, \"name\": \"Avi\"},\n]\n\nby_id = {user[\"id\"]: user for user in users}\nprint(by_id)",
          "challenge_solution": "numbers = range(20)\nresult = {\n    n: n ** 2\n    for n in numbers\n    if n % 2 == 0\n}\nprint(result)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Comprehensions פותר.",
            "עבור על התחביר המרכזי: list/dict/set comprehensions, filtering.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Comprehensions, תקן אותה והרץ שוב.",
            "code": "squares = [x*x for x in range(10) if x%2==0]",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def calculate_order_total(items, discount=0.0):\n    if not 0 <= discount <= 1:\n        raise ValueError(\"discount must be between 0 and 1\")\n\n    subtotal = sum(items)\n    return subtotal * (1 - discount)\n\nprint(calculate_order_total([100, 50], 0.10))",
          "challenge_solution": "def calculate_order_total(items, discount=0.0):\n    if not items:\n        return 0.0\n    if not 0 <= discount <= 1:\n        raise ValueError(\"discount must be between 0 and 1\")\n    if any(price < 0 for price in items):\n        raise ValueError(\"price cannot be negative\")\n\n    return round(sum(items) * (1 - discount), 2)\n\nassert calculate_order_total([100, 50], 0.1) == 135.0\nassert calculate_order_total([], 0.1) == 0.0",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Functions פותר.",
            "עבור על התחביר המרכזי: def, return, parameters, defaults.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Functions, תקן אותה והרץ שוב.",
            "code": "def discount_rate(is_member: bool) -> float:\n    if is_member:\n        return 0.10\n    return 0.0\n\nprint(discount_rate(True))",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def log_event(message, **metadata):\n    print(message)\n    for key, value in metadata.items():\n        print(f\"{key}={value}\")\n\nlog_event(\"user-login\", user_id=7, ip=\"127.0.0.1\")",
          "challenge_solution": "def total(*numbers, tax=0.0):\n    subtotal = sum(numbers)\n    return subtotal * (1 + tax)\n\nprint(total(10, 20, 30, tax=0.18))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי *args ו-**kwargs פותר.",
            "עבור על התחביר המרכזי: variadic args, unpacking.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-*args ו-**kwargs, תקן אותה והרץ שוב.",
            "code": "def total(*nums): return sum(nums)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "x = 10\n\ndef demo():\n    x = 20\n    return x\n\nprint(demo())  # 20\nprint(x)       # 10",
          "challenge_solution": "def counter():\n    count = 0\n\n    def increment():\n        nonlocal count\n        count += 1\n        return count\n\n    return increment\n\nnext_count = counter()\nprint(next_count())\nprint(next_count())",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Scope פותר.",
            "עבור על התחביר המרכזי: local/global/nonlocal, LEGB.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Scope, תקן אותה והרץ שוב.",
            "code": "x = 10\ndef f():\n    x = 20\n    return x",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "users = [\n    {\"name\": \"A\", \"age\": 30},\n    {\"name\": \"B\", \"age\": 20},\n    {\"name\": \"C\", \"age\": 30},\n]\n\nordered = sorted(users, key=lambda u: (u[\"age\"], u[\"name\"]))\nprint(ordered)",
          "challenge_solution": "numbers = [1, 2, 3, 4, 5]\neven_squares = list(map(lambda x: x*x, filter(lambda x: x % 2 == 0, numbers)))\nprint(even_squares)\n\n# בפועל comprehension לרוב קריאה יותר:\nprint([x*x for x in numbers if x % 2 == 0])",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי lambda/map/filter פותר.",
            "עבור על התחביר המרכזי: functional tools and when not to use them.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-lambda/map/filter, תקן אותה והרץ שוב.",
            "code": "sorted_users = sorted([{'age':30},{'age':20}], key=lambda u:u['age'])",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class CountTo:\n    def __init__(self, limit):\n        self.limit = limit\n        self.current = 1\n\n    def __iter__(self):\n        return self\n\n    def __next__(self):\n        if self.current > self.limit:\n            raise StopIteration\n        value = self.current\n        self.current += 1\n        return value\n\nprint(list(CountTo(4)))",
          "challenge_solution": "values = [10, 20, 30]\niterator = iter(values)\n\nprint(next(iterator))\nprint(next(iterator))\nprint(next(iterator))\n\ntry:\n    print(next(iterator))\nexcept StopIteration:\n    print(\"finished\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Iterable vs Iterator פותר.",
            "עבור על התחביר המרכזי: iter, next, StopIteration.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Iterable vs Iterator, תקן אותה והרץ שוב.",
            "code": "it = iter([1,2,3])\nprint(next(it))",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def read_lines(lines):\n    for line in lines:\n        yield line.strip()\n\nfor line in read_lines([\" a\\n\", \" b\\n\"]):\n    print(line)",
          "challenge_solution": "def batches(values, size):\n    batch = []\n    for value in values:\n        batch.append(value)\n        if len(batch) == size:\n            yield batch\n            batch = []\n    if batch:\n        yield batch\n\nprint(list(batches(range(7), 3)))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Generators פותר.",
            "עבור על התחביר המרכזי: yield, lazy evaluation, pipelines.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Generators, תקן אותה והרץ שוב.",
            "code": "def count(n):\n    for i in range(n):\n        yield i",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from functools import wraps\nfrom time import perf_counter\n\ndef measure(fn):\n    @wraps(fn)\n    def wrapper(*args, **kwargs):\n        start = perf_counter()\n        result = fn(*args, **kwargs)\n        print(\"seconds:\", perf_counter() - start)\n        return result\n    return wrapper\n\n@measure\ndef work():\n    return sum(range(1000))\n\nprint(work())",
          "challenge_solution": "from functools import wraps\n\ndef require_role(required):\n    def decorate(fn):\n        @wraps(fn)\n        def wrapper(user, *args, **kwargs):\n            if user[\"role\"] != required:\n                raise PermissionError(\"forbidden\")\n            return fn(user, *args, **kwargs)\n        return wrapper\n    return decorate\n\n@require_role(\"admin\")\ndef delete_user(user, user_id):\n    return f\"deleted {user_id}\" ",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Decorators פותר.",
            "עבור על התחביר המרכזי: wrappers, functools.wraps, parameterized decorators.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Decorators, תקן אותה והרץ שוב.",
            "code": "from functools import wraps\n\ndef log_call(fn):\n    @wraps(fn)\n    def wrapper(*a, **kw):\n        print(fn.__name__)\n        return fn(*a, **kw)\n    return wrapper",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from contextlib import contextmanager\nfrom time import perf_counter\n\n@contextmanager\ndef timer():\n    start = perf_counter()\n    try:\n        yield\n    finally:\n        print(\"seconds:\", perf_counter() - start)\n\nwith timer():\n    sum(range(10000))",
          "challenge_solution": "from contextlib import contextmanager\n\n@contextmanager\ndef managed_resource():\n    print(\"open\")\n    try:\n        yield {\"connected\": True}\n    finally:\n        print(\"close\")\n\nwith managed_resource() as resource:\n    print(resource)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Context Managers פותר.",
            "עבור על התחביר המרכזי: with, __enter__/__exit__, contextlib.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Context Managers, תקן אותה והרץ שוב.",
            "code": "from contextlib import contextmanager\n@contextmanager\ndef demo():\n    yield 'ok'",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "first, *middle, last = [1, 2, 3, 4, 5]\nprint(first)\nprint(middle)\nprint(last)\n\nbase = {\"a\": 1, \"b\": 2}\noverride = {\"b\": 20, \"c\": 3}\nmerged = {**base, **override}\nprint(merged)",
          "challenge_solution": "def describe(name, age, city):\n    print(name, age, city)\n\nperson = {\"name\": \"Dana\", \"age\": 30, \"city\": \"Ashkelon\"}\ndescribe(**person)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Unpacking פותר.",
            "עבור על התחביר המרכזי: starred expressions, dict merging.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Unpacking, תקן אותה והרץ שוב.",
            "code": "a, *middle, z = [1,2,3,4]",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "values = [\"python\", \"api\", \"\"]\n\niterator = iter(values)\nwhile (value := next(iterator)) != \"\":\n    print(value)",
          "challenge_solution": "data = [\"10\", \"20\", \"bad\", \"30\"]\n\nvalid = []\nfor raw in data:\n    if (clean := raw.strip()).isdigit():\n        valid.append(int(clean))\n\nprint(valid)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Walrus operator פותר.",
            "עבור על התחביר המרכזי: assignment expressions and readability.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Walrus operator, תקן אותה והרץ שוב.",
            "code": "while (line := input('> ')) != 'quit':\n    print(line)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def handle(command):\n    match command:\n        case [\"add\", value]:\n            return f\"adding {value}\"\n        case [\"delete\", value]:\n            return f\"deleting {value}\"\n        case _:\n            return \"unknown\"\n\nprint(handle([\"add\", \"task\"]))",
          "challenge_solution": "def classify(payload):\n    match payload:\n        case {\"type\": \"user\", \"id\": int(user_id)}:\n            return f\"user:{user_id}\"\n        case {\"type\": \"error\", \"message\": str(message)}:\n            return f\"error:{message}\"\n        case _:\n            return \"unsupported\"\n\nprint(classify({\"type\": \"user\", \"id\": 7}))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Pattern Matching פותר.",
            "עבור על התחביר המרכזי: match/case, guards, destructuring.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Pattern Matching, תקן אותה והרץ שוב.",
            "code": "def handle(cmd):\n    match cmd:\n        case ['add', x]: return x\n        case _: return None",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class User:\n    def __init__(self, name, email):\n        self.name = name\n        self.email = email\n\n    def display(self):\n        return f\"{self.name} <{self.email}>\"\n\nuser = User(\"Dana\", \"dana@example.com\")\nprint(user.display())",
          "challenge_solution": "class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.balance = balance\n\n    def deposit(self, amount):\n        if amount <= 0:\n            raise ValueError(\"amount must be positive\")\n        self.balance += amount\n\n    def withdraw(self, amount):\n        if amount > self.balance:\n            raise ValueError(\"insufficient funds\")\n        self.balance -= amount",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Classes & Objects פותר.",
            "עבור על התחביר המרכזי: class, self, state, methods.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Classes & Objects, תקן אותה והרץ שוב.",
            "code": "class User:\n    def __init__(self, name): self.name=name",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class User:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    @classmethod\n    def from_dict(cls, data):\n        return cls(data[\"name\"], data[\"age\"])\n\nuser = User.from_dict({\"name\": \"Dana\", \"age\": 30})\nprint(user.name)",
          "challenge_solution": "class Temperature:\n    def __init__(self, celsius):\n        self.celsius = celsius\n\n    @classmethod\n    def from_fahrenheit(cls, f):\n        return cls((f - 32) * 5 / 9)\n\n    @staticmethod\n    def is_freezing(celsius):\n        return celsius <= 0",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Class/Static Methods פותר.",
            "עבור על התחביר המרכזי: @classmethod, @staticmethod, alternate constructors.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Class/Static Methods, תקן אותה והרץ שוב.",
            "code": "class Temperature:\n    @classmethod\n    def from_f(cls, f): return cls()",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class Product:\n    def __init__(self, price):\n        self.price = price\n\n    @property\n    def price(self):\n        return self._price\n\n    @price.setter\n    def price(self, value):\n        if value < 0:\n            raise ValueError(\"price cannot be negative\")\n        self._price = value\n\np = Product(10)\nprint(p.price)",
          "challenge_solution": "class Celsius:\n    def __init__(self, value):\n        self.value = value\n\n    @property\n    def fahrenheit(self):\n        return self.value * 9 / 5 + 32\n\nprint(Celsius(0).fahrenheit)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Properties פותר.",
            "עבור על התחביר המרכזי: @property, setters, validation.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Properties, תקן אותה והרץ שוב.",
            "code": "class Product:\n    @property\n    def price(self): return self._price",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class User:\n    def role(self):\n        return \"user\"\n\nclass Admin(User):\n    def role(self):\n        return \"admin\"\n\nprint(Admin().role())",
          "challenge_solution": "# Composition עדיפה כשאין באמת יחס is-a.\nclass Logger:\n    def log(self, message):\n        print(message)\n\nclass OrderService:\n    def __init__(self, logger):\n        self.logger = logger\n\n    def create(self):\n        self.logger.log(\"order created\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Inheritance פותר.",
            "עבור על התחביר המרכזי: super, overriding, MRO.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Inheritance, תקן אותה והרץ שוב.",
            "code": "class Admin(User):\n    pass",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class PaymentGateway:\n    def charge(self, amount):\n        return f\"charged {amount}\"\n\nclass Order:\n    def __init__(self, payment):\n        self.payment = payment\n\n    def pay(self, amount):\n        return self.payment.charge(amount)\n\nprint(Order(PaymentGateway()).pay(100))",
          "challenge_solution": "class EmailSender:\n    def send(self, message):\n        return f\"email:{message}\"\n\nclass NotificationService:\n    def __init__(self, sender):\n        self.sender = sender\n\n    def notify(self, message):\n        return self.sender.send(message)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Composition פותר.",
            "עבור על התחביר המרכזי: has-a relationships, dependency injection.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Composition, תקן אותה והרץ שוב.",
            "code": "class Order:\n    def __init__(self, payment): self.payment=payment",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from dataclasses import dataclass\n\n@dataclass\nclass User:\n    id: int\n    name: str\n    active: bool = True\n\nprint(User(1, \"Dana\"))",
          "challenge_solution": "from dataclasses import dataclass\n\n@dataclass(frozen=True, order=True)\nclass Money:\n    amount: int\n    currency: str = \"ILS\"\n\na = Money(10)\nb = Money(20)\nprint(a < b)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Dataclasses פותר.",
            "עבור על התחביר המרכזי: @dataclass, frozen, field, ordering.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Dataclasses, תקן אותה והרץ שוב.",
            "code": "from dataclasses import dataclass\n@dataclass\nclass Point:\n    x:int\n    y:int",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from enum import StrEnum\n\nclass OrderStatus(StrEnum):\n    PENDING = \"pending\"\n    PAID = \"paid\"\n    CANCELLED = \"cancelled\"\n\nprint(OrderStatus.PAID.value)",
          "challenge_solution": "from enum import StrEnum\n\nclass Role(StrEnum):\n    ADMIN = \"admin\"\n    USER = \"user\"\n\ndef can_delete(role):\n    return role is Role.ADMIN\n\nprint(can_delete(Role.ADMIN))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Enums פותר.",
            "עבור על התחביר המרכזי: Enum, StrEnum, domain states.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Enums, תקן אותה והרץ שוב.",
            "code": "from enum import StrEnum\nclass Status(StrEnum):\n    ACTIVE='active'",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from typing import Protocol\n\nclass Sender(Protocol):\n    def send(self, message: str) -> None: ...\n\nclass ConsoleSender:\n    def send(self, message: str) -> None:\n        print(message)\n\ndef notify(sender: Sender, message: str):\n    sender.send(message)\n\nnotify(ConsoleSender(), \"hello\")",
          "challenge_solution": "from abc import ABC, abstractmethod\n\nclass Repository(ABC):\n    @abstractmethod\n    def get(self, item_id):\n        raise NotImplementedError\n\nclass MemoryRepository(Repository):\n    def get(self, item_id):\n        return {\"id\": item_id}",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Protocols & ABC פותר.",
            "עבור על התחביר המרכזי: duck typing, typing.Protocol, abstract base classes.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Protocols & ABC, תקן אותה והרץ שוב.",
            "code": "from typing import Protocol\nclass Sender(Protocol):\n    def send(self, msg:str)->None: ...",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class PaymentGateway:\n    def charge(self, amount):\n        return True\n\nclass PaymentService:\n    def __init__(self, gateway):\n        self.gateway = gateway\n\n    def pay(self, amount):\n        return self.gateway.charge(amount)\n\nservice = PaymentService(PaymentGateway())\nprint(service.pay(100))",
          "challenge_solution": "# SRP: כל מחלקה מטפלת באחריות אחת.\nclass InvoiceCalculator:\n    def total(self, prices):\n        return sum(prices)\n\nclass InvoiceRepository:\n    def save(self, invoice):\n        pass\n\nclass InvoiceMailer:\n    def send(self, invoice):\n        pass",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי SOLID בפייתון פותר.",
            "עבור על התחביר המרכזי: SRP, OCP, LSP, ISP, DIP.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-SOLID בפייתון, תקן אותה והרץ שוב.",
            "code": "class PaymentService:\n    def __init__(self, gateway): self.gateway=gateway",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def parse_age(raw):\n    try:\n        age = int(raw)\n    except ValueError as exc:\n        raise ValueError(\"age must be an integer\") from exc\n\n    if age < 0:\n        raise ValueError(\"age cannot be negative\")\n    return age\n\nprint(parse_age(\"30\"))",
          "challenge_solution": "class InvalidAgeError(ValueError):\n    pass\n\ndef parse_age(raw):\n    try:\n        age = int(raw)\n    except ValueError as exc:\n        raise InvalidAgeError(\"invalid number\") from exc\n\n    if not 0 <= age <= 120:\n        raise InvalidAgeError(\"age out of range\")\n    return age",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Exceptions פותר.",
            "עבור על התחביר המרכזי: try/except/else/finally, raise.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Exceptions, תקן אותה והרץ שוב.",
            "code": "try:\n    x=int('x')\nexcept ValueError as e:\n    print(e)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class UserNotFoundError(Exception):\n    pass\n\ndef get_user(user_id):\n    if user_id != 1:\n        raise UserNotFoundError(f\"user {user_id} not found\")\n    return {\"id\": 1}\n\nprint(get_user(1))",
          "challenge_solution": "class DomainError(Exception):\n    pass\n\nclass InsufficientBalanceError(DomainError):\n    pass\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientBalanceError(\"not enough balance\")\n    return balance - amount",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Custom Exceptions פותר.",
            "עבור על התחביר המרכזי: domain exceptions, chaining.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Custom Exceptions, תקן אותה והרץ שוב.",
            "code": "class NotFoundError(Exception):\n    pass",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from pathlib import Path\n\nroot = Path(\".\")\ncounts = {}\n\nfor path in root.iterdir():\n    if path.is_file():\n        suffix = path.suffix or \"<no suffix>\"\n        counts[suffix] = counts.get(suffix, 0) + 1\n\nprint(counts)",
          "challenge_solution": "from pathlib import Path\n\ndef find_python_files(root):\n    return list(Path(root).rglob(\"*.py\"))\n\nfor path in find_python_files(\".\"):\n    print(path)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Files & pathlib פותר.",
            "עבור על התחביר המרכזי: Path, read_text/write_text, directory traversal.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Files & pathlib, תקן אותה והרץ שוב.",
            "code": "from pathlib import Path\np=Path('data.txt')\np.write_text('hello')",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import json\n\nusers = [{\"id\": 1, \"name\": \"Dana\"}]\ntext = json.dumps(users, ensure_ascii=False, indent=2)\nprint(text)\n\nloaded = json.loads(text)\nprint(loaded[0][\"name\"])",
          "challenge_solution": "import json\n\ndef encode_user(user):\n    return json.dumps(user, ensure_ascii=False)\n\ndef decode_user(text):\n    data = json.loads(text)\n    if \"id\" not in data or \"name\" not in data:\n        raise ValueError(\"invalid user\")\n    return data",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי JSON פותר.",
            "עבור על התחביר המרכזי: json loads/dumps/load/dump.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-JSON, תקן אותה והרץ שוב.",
            "code": "import json\ntext=json.dumps({'ok':True})",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import csv\nfrom io import StringIO\n\nsource = StringIO(\"name,score\\nDana,90\\nAvi,70\\n\")\nreader = csv.DictReader(source)\n\npassed = [row for row in reader if int(row[\"score\"]) >= 80]\nprint(passed)",
          "challenge_solution": "import csv\nfrom io import StringIO\n\nout = StringIO()\nwriter = csv.DictWriter(out, fieldnames=[\"name\", \"score\"])\nwriter.writeheader()\nwriter.writerow({\"name\": \"Dana\", \"score\": 90})\nprint(out.getvalue())",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי CSV פותר.",
            "עבור על התחביר המרכזי: csv module, DictReader/DictWriter.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-CSV, תקן אותה והרץ שוב.",
            "code": "import csv",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import logging\n\nlogging.basicConfig(\n    level=logging.INFO,\n    format=\"%(levelname)s %(message)s\",\n)\n\nlogging.info(\"application started\")\nlogging.warning(\"example warning\")",
          "challenge_solution": "import logging\n\nlogger = logging.getLogger(\"app\")\n\ndef process(user_id):\n    logger.info(\"processing user_id=%s\", user_id)\n    try:\n        return 10 / user_id\n    except ZeroDivisionError:\n        logger.exception(\"processing failed user_id=%s\", user_id)\n        raise",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Logging פותר.",
            "עבור על התחביר המרכזי: levels, handlers, formatters, structured context.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Logging, תקן אותה והרץ שוב.",
            "code": "import logging\nlogging.basicConfig(level=logging.INFO)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import os\n\ndatabase_url = os.getenv(\"DATABASE_URL\", \"sqlite:///local.db\")\ndebug = os.getenv(\"DEBUG\", \"false\").lower() == \"true\"\n\nprint(database_url)\nprint(debug)",
          "challenge_solution": "import os\n\ndef required_env(name):\n    value = os.getenv(name)\n    if not value:\n        raise RuntimeError(f\"missing environment variable: {name}\")\n    return value\n\n# api_key = required_env(\"API_KEY\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Environment variables פותר.",
            "עבור על התחביר המרכזי: os.environ, .env concepts, secrets hygiene.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Environment variables, תקן אותה והרץ שוב.",
            "code": "import os\napi_key=os.getenv('API_KEY')",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def total(prices: list[float]) -> float:\n    return sum(prices)\n\ndef find_name(user: dict[str, object]) -> str | None:\n    value = user.get(\"name\")\n    return value if isinstance(value, str) else None\n\nprint(total([1.5, 2.5]))",
          "challenge_solution": "type UserId = int\n\ndef get_user_name(user_id: UserId, users: dict[UserId, str]) -> str | None:\n    return users.get(user_id)\n\nprint(get_user_name(1, {1: \"Dana\"}))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Type Hints פותר.",
            "עבור על התחביר המרכזי: annotations, unions, optional, collections.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Type Hints, תקן אותה והרץ שוב.",
            "code": "def greet(name: str) -> str:\n    return f'Hi {name}'",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from typing import TypeVar\n\nT = TypeVar(\"T\")\n\ndef first(items: list[T]) -> T:\n    if not items:\n        raise ValueError(\"empty list\")\n    return items[0]\n\nprint(first([\"a\", \"b\"]))",
          "challenge_solution": "from typing import Generic, TypeVar\n\nT = TypeVar(\"T\")\n\nclass Box(Generic[T]):\n    def __init__(self, value: T):\n        self.value = value\n\ntext_box = Box[str](\"hello\")\nprint(text_box.value)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Generics פותר.",
            "עבור על התחביר המרכזי: TypeVar, generic functions/classes.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Generics, תקן אותה והרץ שוב.",
            "code": "from typing import TypeVar\nT=TypeVar('T')\ndef first(xs:list[T])->T: return xs[0]",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from typing import TypedDict, Literal\n\nclass UserPayload(TypedDict):\n    name: str\n    role: Literal[\"admin\", \"user\"]\n\npayload: UserPayload = {\"name\": \"Dana\", \"role\": \"user\"}\nprint(payload)",
          "challenge_solution": "from typing import Literal\n\nHttpMethod = Literal[\"GET\", \"POST\", \"PUT\", \"DELETE\"]\n\ndef request(method: HttpMethod) -> str:\n    return method\n\nprint(request(\"GET\"))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי TypedDict & Literal פותר.",
            "עבור על התחביר המרכזי: structured dicts, constrained strings.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-TypedDict & Literal, תקן אותה והרץ שוב.",
            "code": "from typing import TypedDict\nclass UserRow(TypedDict):\n    id:int\n    name:str",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def add(a: int, b: int) -> int:\n    return a + b\n\n# static type checker אמור לזהות את זה:\n# result = add(\"1\", 2)\n\nresult = add(1, 2)\nprint(result)",
          "challenge_solution": "def normalize(value: str | None) -> str:\n    if value is None:\n        return \"\"\n    return value.strip().lower()\n\nprint(normalize(None))\nprint(normalize(\" Python \"))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי mypy/pyright concepts פותר.",
            "עבור על התחביר המרכזי: static analysis, gradual typing.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-mypy/pyright concepts, תקן אותה והרץ שוב.",
            "code": "def add(a:int,b:int)->int: return a+b",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# דוגמת workflow:\n# python -m pip install ruff\n# ruff check .\n# ruff format .\n\ndef add(a: int, b: int) -> int:\n    return a + b\n\nprint(add(1, 2))",
          "challenge_solution": "# pyproject.toml example:\n# [tool.ruff]\n# line-length = 100\n#\n# [tool.ruff.lint]\n# select = [\"E\", \"F\", \"I\", \"B\"]\n\nprint(\"configure lint rules in pyproject.toml\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Formatting & linting פותר.",
            "עבור על התחביר המרכזי: Ruff, Black concepts, import hygiene.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Formatting & linting, תקן אותה והרץ שוב.",
            "code": "ruff check .",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# pyproject.toml\n[project]\nname = \"demo-app\"\nversion = \"0.1.0\"\nrequires-python = \">=3.12\"\ndependencies = [\n  \"fastapi\",\n  \"uvicorn\",\n]\n\n[tool.pytest.ini_options]\ntestpaths = [\"tests\"]",
          "challenge_solution": "# pyproject.toml\n[project.optional-dependencies]\ndev = [\n  \"pytest\",\n  \"pytest-cov\",\n  \"ruff\",\n]\n\n[tool.ruff]\nline-length = 100",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי pyproject.toml פותר.",
            "עבור על התחביר המרכזי: project metadata, dependencies, tool config.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-pyproject.toml, תקן אותה והרץ שוב.",
            "code": "[project]\nname = 'demo'\nversion = '0.1.0'",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# structure:\n# myapp/\n#   __init__.py\n#   services/\n#     __init__.py\n#     users.py\n#\n# import:\n# from myapp.services.users import create_user\n\nprint(\"package structure ready\")",
          "challenge_solution": "# prefer absolute imports in application code:\n# from myapp.repositories.users import UserRepository\n#\n# relative import can be useful inside a package:\n# from .models import User\n\nprint(\"avoid circular imports by keeping boundaries clear\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Modules & Packages פותר.",
            "עבור על התחביר המרכזי: imports, __init__, absolute vs relative.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Modules & Packages, תקן אותה והרץ שוב.",
            "code": "from myapp.services import users",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def is_even(number):\n    return number % 2 == 0\n\ndef test_even_number():\n    # Arrange\n    number = 4\n    # Act\n    result = is_even(number)\n    # Assert\n    assert result is True",
          "challenge_solution": "def divide(a, b):\n    if b == 0:\n        raise ValueError(\"b cannot be zero\")\n    return a / b\n\ndef test_divide_happy_path():\n    assert divide(10, 2) == 5\n\ndef test_divide_rejects_zero():\n    import pytest\n    with pytest.raises(ValueError):\n        divide(10, 0)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Testing mindset פותר.",
            "עבור על התחביר המרכזי: arrange-act-assert, deterministic tests, test pyramid.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Testing mindset, תקן אותה והרץ שוב.",
            "code": "def add(a,b): return a+b\n\ndef test_add():\n    assert add(2,3)==5",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def normalize_email(email: str) -> str:\n    return email.strip().lower()\n\ndef test_normalize_email_lowercases():\n    assert normalize_email(\"A@B.COM\") == \"a@b.com\"\n\ndef test_normalize_email_strips_spaces():\n    assert normalize_email(\"  a@b.com  \") == \"a@b.com\"\n\ndef test_normalize_email_empty():\n    assert normalize_email(\"   \") == \"\" ",
          "challenge_solution": "# run examples:\n# pytest -q\n# pytest -k normalize\n# pytest -x\n# pytest tests/test_users.py::test_create_user\n\ndef test_example():\n    assert 2 + 2 == 4",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי pytest basics פותר.",
            "עבור על התחביר המרכזי: discovery, assert rewriting, -q/-k/-x.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-pytest basics, תקן אותה והרץ שוב.",
            "code": "def add(a, b):\n    return a + b\n\ndef test_add():\n    assert add(2, 3) == 5\n\nprint(add(2, 3))",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import pytest\n\n@pytest.fixture\ndef user():\n    return {\"id\": 1, \"name\": \"Dana\"}\n\ndef test_user_name(user):\n    assert user[\"name\"] == \"Dana\" ",
          "challenge_solution": "import pytest\n\n@pytest.fixture\ndef db():\n    fake = {}\n    yield fake\n    fake.clear()\n\n@pytest.fixture\ndef user(db):\n    db[1] = {\"id\": 1, \"name\": \"Dana\"}\n    return db[1]",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Fixtures פותר.",
            "עבור על התחביר המרכזי: @pytest.fixture, scopes, dependencies.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Fixtures, תקן אותה והרץ שוב.",
            "code": "import pytest\n@pytest.fixture\ndef user(): return {'id':1}",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import pytest\n\n@pytest.mark.parametrize(\n    \"value,expected\",\n    [\n        (2, True),\n        (3, False),\n        (0, True),\n        (-2, True),\n    ],\n)\ndef test_is_even(value, expected):\n    assert (value % 2 == 0) is expected",
          "challenge_solution": "import pytest\n\n@pytest.mark.parametrize(\"raw,expected\", [\n    (\" A@B.COM \", \"a@b.com\"),\n    (\"x@y.io\", \"x@y.io\"),\n    (\"   \", \"\"),\n])\ndef test_normalize(raw, expected):\n    assert raw.strip().lower() == expected",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Parametrize פותר.",
            "עבור על התחביר המרכזי: @pytest.mark.parametrize.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Parametrize, תקן אותה והרץ שוב.",
            "code": "import pytest\n@pytest.mark.parametrize('a,b,e',[(1,2,3),(2,3,5)])\ndef test_add(a,b,e): assert a+b==e",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import pytest\n\ndef divide(a, b):\n    return a / b\n\ndef test_zero_division():\n    with pytest.raises(ZeroDivisionError):\n        divide(1, 0)\n\ndef test_float():\n    assert 0.1 + 0.2 == pytest.approx(0.3)",
          "challenge_solution": "import pytest\n\ndef parse_positive(raw):\n    value = int(raw)\n    if value <= 0:\n        raise ValueError(\"must be positive\")\n    return value\n\n@pytest.mark.parametrize(\"raw\", [\"0\", \"-1\"])\ndef test_rejects_non_positive(raw):\n    with pytest.raises(ValueError, match=\"positive\"):\n        parse_positive(raw)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Exceptions & approx פותר.",
            "עבור על התחביר המרכזי: pytest.raises, pytest.approx.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Exceptions & approx, תקן אותה והרץ שוב.",
            "code": "import pytest\ndef test_zero():\n    with pytest.raises(ZeroDivisionError): 1/0",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from unittest.mock import Mock\n\nsender = Mock()\nsender.send.return_value = True\n\nresult = sender.send(\"hello\")\n\nassert result is True\nsender.send.assert_called_once_with(\"hello\")",
          "challenge_solution": "def fetch_user(client, user_id):\n    return client.get(f\"/users/{user_id}\")\n\nclass FakeResponse:\n    def json(self):\n        return {\"id\": 7}\n\nclass FakeClient:\n    def get(self, url):\n        assert url == \"/users/7\"\n        return FakeResponse()\n\nassert fetch_user(FakeClient(), 7).json()[\"id\"] == 7",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Monkeypatch & Mock פותר.",
            "עבור על התחביר המרכזי: monkeypatch, unittest.mock, patch boundaries.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Monkeypatch & Mock, תקן אותה והרץ שוב.",
            "code": "from unittest.mock import Mock\nsender=Mock()",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def test_export(tmp_path):\n    output = tmp_path / \"result.txt\"\n    output.write_text(\"hello\", encoding=\"utf-8\")\n\n    assert output.exists()\n    assert output.read_text(encoding=\"utf-8\") == \"hello\" ",
          "challenge_solution": "def save_json(path, text):\n    path.write_text(text, encoding=\"utf-8\")\n\ndef test_save_json(tmp_path):\n    path = tmp_path / \"data.json\"\n    save_json(path, '{\"ok\": true}')\n    assert '\"ok\": true' in path.read_text(encoding=\"utf-8\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Temporary files פותר.",
            "עבור על התחביר המרכזי: tmp_path, filesystem tests.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Temporary files, תקן אותה והרץ שוב.",
            "code": "def test_file(tmp_path):\n    p=tmp_path/'x.txt'; p.write_text('a'); assert p.read_text()=='a'",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import pytest\n\n@pytest.mark.slow\ndef test_report_generation():\n    assert True\n\n# pytest -m \"not slow\" ",
          "challenge_solution": "import pytest\n\n@pytest.mark.integration\ndef test_database_roundtrip():\n    assert True\n\n@pytest.mark.skip(reason=\"feature not available\")\ndef test_future_feature():\n    pass",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Markers פותר.",
            "עבור על התחביר המרכזי: custom markers, skip, xfail.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Markers, תקן אותה והרץ שוב.",
            "code": "import pytest\n@pytest.mark.slow\ndef test_slow(): pass",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Commands:\n# pytest --cov=myapp --cov-report=term-missing\n#\n# Then inspect missing lines/branches and write behavior tests.\n\ndef classify(value):\n    if value > 0:\n        return \"positive\"\n    if value < 0:\n        return \"negative\"\n    return \"zero\" ",
          "challenge_solution": "def test_classify_all_branches():\n    assert classify(1) == \"positive\"\n    assert classify(-1) == \"negative\"\n    assert classify(0) == \"zero\"\n\n# High coverage is useful only when tests assert meaningful behavior.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Coverage פותר.",
            "עבור על התחביר המרכזי: branch coverage, meaningful coverage, pytest-cov.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Coverage, תקן אותה והרץ שוב.",
            "code": "pytest --cov=myapp --cov-report=term-missing",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def make_user(**overrides):\n    user = {\n        \"id\": 1,\n        \"name\": \"Dana\",\n        \"active\": True,\n    }\n    return user | overrides\n\nassert make_user(name=\"Avi\")[\"name\"] == \"Avi\" ",
          "challenge_solution": "class UserBuilder:\n    def __init__(self):\n        self.data = {\"id\": 1, \"name\": \"Dana\"}\n\n    def named(self, name):\n        self.data[\"name\"] = name\n        return self\n\n    def build(self):\n        return self.data.copy()\n\nuser = UserBuilder().named(\"Avi\").build()",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Test architecture פותר.",
            "עבור על התחביר המרכזי: factories, builders, fixtures composition, anti-patterns.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Test architecture, תקן אותה והרץ שוב.",
            "code": "def make_user(**overrides):\n    return {'id':1,'name':'A'} | overrides",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "CREATE TABLE users (\n    id BIGSERIAL PRIMARY KEY,\n    email TEXT NOT NULL UNIQUE,\n    name TEXT NOT NULL\n);\n\nCREATE TABLE orders (\n    id BIGSERIAL PRIMARY KEY,\n    user_id BIGINT NOT NULL REFERENCES users(id),\n    total NUMERIC(12,2) NOT NULL\n);",
          "challenge_solution": "-- users 1:N orders\n-- orders N:M products באמצעות order_items\n\nCREATE TABLE order_items (\n    order_id BIGINT REFERENCES orders(id),\n    product_id BIGINT REFERENCES products(id),\n    quantity INT NOT NULL CHECK (quantity > 0),\n    PRIMARY KEY (order_id, product_id)\n);",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Relational basics פותר.",
            "עבור על התחביר המרכזי: tables, rows, PK/FK, normalization, indexes.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Relational basics, תקן אותה והרץ שוב.",
            "code": "SELECT id, name FROM users WHERE active = true;",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "INSERT INTO users(name, email)\nVALUES ('Dana', 'dana@example.com');\n\nSELECT id, name, email\nFROM users\nWHERE email = 'dana@example.com';\n\nUPDATE users\nSET name = 'Dana Cohen'\nWHERE email = 'dana@example.com';\n\nDELETE FROM users\nWHERE email = 'dana@example.com';",
          "challenge_solution": "-- Use parameters from application code:\nSELECT id, name\nFROM users\nWHERE id = ?;\n\n-- Do not concatenate untrusted input into SQL strings.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי CRUD SQL פותר.",
            "עבור על התחביר המרכזי: INSERT/SELECT/UPDATE/DELETE.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-CRUD SQL, תקן אותה והרץ שוב.",
            "code": "INSERT INTO users(name) VALUES ('Dana');",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "SELECT\n    u.id,\n    u.name,\n    COALESCE(SUM(o.total), 0) AS total_spent\nFROM users AS u\nLEFT JOIN orders AS o\n    ON o.user_id = u.id\nGROUP BY u.id, u.name\nORDER BY total_spent DESC;",
          "challenge_solution": "SELECT\n    u.id,\n    u.name,\n    COUNT(o.id) AS order_count,\n    AVG(o.total) AS avg_order\nFROM users u\nJOIN orders o ON o.user_id = u.id\nGROUP BY u.id, u.name\nHAVING COUNT(o.id) >= 3;",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי JOIN & aggregation פותר.",
            "עבור על התחביר המרכזי: INNER/LEFT JOIN, GROUP BY, HAVING.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-JOIN & aggregation, תקן אותה והרץ שוב.",
            "code": "SELECT u.id, COUNT(o.id) FROM users u LEFT JOIN orders o ON o.user_id=u.id GROUP BY u.id;",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "BEGIN;\n\nUPDATE accounts\nSET balance = balance - 100\nWHERE id = 1;\n\nUPDATE accounts\nSET balance = balance + 100\nWHERE id = 2;\n\nCOMMIT;",
          "challenge_solution": "-- Application flow:\n-- 1. BEGIN\n-- 2. Lock/read source account\n-- 3. Validate sufficient balance\n-- 4. Debit source\n-- 5. Credit target\n-- 6. COMMIT\n-- Any failure -> ROLLBACK",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Transactions פותר.",
            "עבור על התחביר המרכזי: ACID, commit, rollback, isolation concepts.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Transactions, תקן אותה והרץ שוב.",
            "code": "BEGIN;\nUPDATE accounts SET balance=balance-10 WHERE id=1;\nCOMMIT;",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "CREATE UNIQUE INDEX idx_users_email\nON users(email);\n\nCREATE INDEX idx_orders_user_created\nON orders(user_id, created_at DESC);",
          "challenge_solution": "-- Before adding an index:\nEXPLAIN ANALYZE\nSELECT *\nFROM orders\nWHERE user_id = 42\nORDER BY created_at DESC\nLIMIT 20;\n\n-- Measure, don't guess.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Indexes פותר.",
            "עבור על התחביר המרכזי: B-tree concept, selectivity, EXPLAIN.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Indexes, תקן אותה והרץ שוב.",
            "code": "CREATE INDEX idx_users_email ON users(email);",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from sqlalchemy import String, create_engine\nfrom sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, Session\n\nclass Base(DeclarativeBase):\n    pass\n\nclass User(Base):\n    __tablename__ = \"users\"\n    id: Mapped[int] = mapped_column(primary_key=True)\n    name: Mapped[str] = mapped_column(String(100))\n\nengine = create_engine(\"sqlite:///:memory:\")\nBase.metadata.create_all(engine)\n\nwith Session(engine) as session:\n    session.add(User(name=\"Dana\"))\n    session.commit()",
          "challenge_solution": "from sqlalchemy import select\n\nwith Session(engine) as session:\n    users = session.scalars(\n        select(User).where(User.name == \"Dana\")\n    ).all()\n    print(users)",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי SQLAlchemy ORM פותר.",
            "עבור על התחביר המרכזי: engine, session, declarative models.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-SQLAlchemy ORM, תקן אותה והרץ שוב.",
            "code": "from sqlalchemy.orm import DeclarativeBase\nclass Base(DeclarativeBase): pass",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Conceptual SQLAlchemy mapping:\n# class User(Base):\n#     orders: Mapped[list[\"Order\"]] = relationship(back_populates=\"user\")\n#\n# class Order(Base):\n#     user_id: Mapped[int] = mapped_column(ForeignKey(\"users.id\"))\n#     user: Mapped[\"User\"] = relationship(back_populates=\"orders\")\n\nprint(\"one-to-many mapping\")",
          "challenge_solution": "# For N:M use an association table.\n# Avoid accidental N+1 queries; choose selectinload/joinedload when appropriate.\n\nprint(\"model relationships based on access patterns\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Relationships פותר.",
            "עבור על התחביר המרכזי: one-to-many, many-to-many, eager/lazy loading.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Relationships, תקן אותה והרץ שוב.",
            "code": "# relationship(...)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# alembic revision --autogenerate -m \"add unique email\"\n# alembic upgrade head\n\n# migration idea:\n# op.create_unique_constraint(\"uq_users_email\", \"users\", [\"email\"])",
          "challenge_solution": "# Safe rollout for a NOT NULL column:\n# 1. Add nullable column\n# 2. Deploy code writing it\n# 3. Backfill existing rows\n# 4. Add NOT NULL constraint\n# 5. Remove temporary compatibility code\n\nprint(\"expand -> migrate -> contract\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Migrations פותר.",
            "עבור על התחביר המרכזי: Alembic concepts, revision, upgrade/downgrade.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Migrations, תקן אותה והרץ שוב.",
            "code": "alembic revision --autogenerate -m 'add users'",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Examples:\n# GET /users/7           -> 200 or 404\n# POST /users            -> 201\n# PUT /users/7           -> 200/204\n# DELETE /users/7        -> 204\n# Invalid payload        -> 422/400 depending on contract\n# Unauthorized           -> 401\n# Authenticated forbidden-> 403\n\nprint(\"choose status codes by HTTP semantics\")",
          "challenge_solution": "# Idempotency:\n# GET, PUT and DELETE are intended to be idempotent.\n# POST usually is not, unless you add an idempotency-key strategy.\n\nprint(\"HTTP semantics are part of your API contract\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי HTTP fundamentals פותר.",
            "עבור על התחביר המרכזי: methods, status codes, headers, body, idempotency, caching.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-HTTP fundamentals, תקן אותה והרץ שוב.",
            "code": "GET /users/123 HTTP/1.1",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Good:\n# GET    /api/v1/tasks\n# POST   /api/v1/tasks\n# GET    /api/v1/tasks/{task_id}\n# PATCH  /api/v1/tasks/{task_id}\n# DELETE /api/v1/tasks/{task_id}\n#\n# Pagination:\n# GET /api/v1/tasks?limit=20&offset=0\n\nprint(\"resources are nouns; HTTP methods express actions\")",
          "challenge_solution": "# Avoid:\n# POST /createTask\n# GET /deleteTask?id=7\n#\n# Prefer:\n# POST /tasks\n# DELETE /tasks/7\n\nprint(\"consistent resource-oriented design\")",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי REST design פותר.",
            "עבור על התחביר המרכזי: resources, URLs, pagination, filtering, versioning.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-REST design, תקן אותה והרץ שוב.",
            "code": "GET /api/v1/users?limit=20&offset=0",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get(\"/health\")\ndef health():\n    return {\"ok\": True}\n\n# Run locally:\n# uvicorn main:app --reload",
          "challenge_solution": "from fastapi import FastAPI, HTTPException\nfrom pydantic import BaseModel\n\napp = FastAPI()\n\nclass UserOut(BaseModel):\n    id: int\n    name: str\n\n@app.get(\"/users/{user_id}\", response_model=UserOut)\ndef get_user(user_id: int):\n    if user_id != 1:\n        raise HTTPException(status_code=404, detail=\"User not found\")\n    return {\"id\": 1, \"name\": \"Dana\"}",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי FastAPI first app פותר.",
            "עבור על התחביר המרכזי: FastAPI instance, routes, uvicorn.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-FastAPI first app, תקן אותה והרץ שוב.",
            "code": "message = 'GET /health -> 200 OK'\nprint(message)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from fastapi import FastAPI, Query\n\napp = FastAPI()\n\n@app.get(\"/users/{user_id}\")\ndef get_user(\n    user_id: int,\n    limit: int = Query(default=20, ge=1, le=100),\n):\n    return {\"id\": user_id, \"limit\": limit}",
          "challenge_solution": "from typing import Annotated\nfrom fastapi import Query\n\nLimit = Annotated[int, Query(ge=1, le=100)]\n\n@app.get(\"/items\")\ndef list_items(limit: Limit = 20, offset: int = 0):\n    return {\"limit\": limit, \"offset\": offset}",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Path & Query params פותר.",
            "עבור על התחביר המרכזי: validation, Annotated, defaults.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Path & Query params, תקן אותה והרץ שוב.",
            "code": "from fastapi import FastAPI\napp=FastAPI()\n@app.get('/users/{user_id}')\ndef get_user(user_id:int, q:str|None=None): return {'id':user_id,'q':q}",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from pydantic import BaseModel, EmailStr\n\nclass UserCreate(BaseModel):\n    name: str\n    email: EmailStr\n\nclass UserRead(BaseModel):\n    id: int\n    name: str\n    email: EmailStr",
          "challenge_solution": "from pydantic import BaseModel, Field\n\nclass ProductCreate(BaseModel):\n    name: str = Field(min_length=1, max_length=100)\n    price: float = Field(gt=0)\n\nproduct = ProductCreate(name=\"Keyboard\", price=100)\nprint(product.model_dump())",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Pydantic models פותר.",
            "עבור על התחביר המרכזי: request/response models, validation.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Pydantic models, תקן אותה והרץ שוב.",
            "code": "from pydantic import BaseModel\nclass UserCreate(BaseModel):\n    name:str\n    email:str",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from fastapi import Depends\n\ndef get_current_user():\n    return {\"id\": 1, \"role\": \"user\"}\n\n@app.get(\"/me\")\ndef me(user = Depends(get_current_user)):\n    return user",
          "challenge_solution": "def get_repository():\n    return UserRepository()\n\n@app.get(\"/users/{user_id}\")\ndef get_user(user_id: int, repo = Depends(get_repository)):\n    return repo.get(user_id)\n\n# In tests, override dependency instead of hitting a real DB.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Dependency Injection פותר.",
            "עבור על התחביר המרכזי: Depends, reusable dependencies.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Dependency Injection, תקן אותה והרץ שוב.",
            "code": "from fastapi import Depends",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from fastapi import HTTPException\n\ndef require_user(user):\n    if user is None:\n        raise HTTPException(\n            status_code=404,\n            detail=\"User not found\",\n        )\n    return user",
          "challenge_solution": "class UserNotFoundError(Exception):\n    pass\n\n# Map domain exception at the HTTP boundary:\n# @app.exception_handler(UserNotFoundError)\n# async def handle_user_not_found(request, exc):\n#     return JSONResponse(status_code=404, content={\"detail\": str(exc)})",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Error handling פותר.",
            "עבור על התחביר המרכזי: HTTPException, custom handlers.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Error handling, תקן אותה והרץ שוב.",
            "code": "from fastapi import HTTPException\nraise HTTPException(404,'Not found')",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from fastapi import APIRouter\n\nrouter = APIRouter(prefix=\"/users\", tags=[\"users\"])\n\n@router.get(\"/{user_id}\")\ndef get_user(user_id: int):\n    return {\"id\": user_id}\n\n# app.include_router(router)",
          "challenge_solution": "# Structure:\n# app/\n#   main.py\n#   api/\n#     users.py\n#     orders.py\n#   services/\n#   repositories/\n#   schemas/\n#\n# Routers coordinate HTTP, not business rules.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Routers פותר.",
            "עבור על התחביר המרכזי: APIRouter, modular API structure.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Routers, תקן אותה והרץ שוב.",
            "code": "from fastapi import APIRouter\nrouter=APIRouter(prefix='/users')",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from time import perf_counter\n\n@app.middleware(\"http\")\nasync def timing_middleware(request, call_next):\n    start = perf_counter()\n    response = await call_next(request)\n    response.headers[\"X-Process-Time\"] = str(perf_counter() - start)\n    return response",
          "challenge_solution": "import uuid\n\n@app.middleware(\"http\")\nasync def request_id_middleware(request, call_next):\n    request_id = request.headers.get(\"X-Request-ID\", str(uuid.uuid4()))\n    response = await call_next(request)\n    response.headers[\"X-Request-ID\"] = request_id\n    return response",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Middleware פותר.",
            "עבור על התחביר המרכזי: request lifecycle, CORS, timing, request IDs.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Middleware, תקן אותה והרץ שוב.",
            "code": "# @app.middleware('http')",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from pydantic import BaseModel\n\nclass HealthResponse(BaseModel):\n    ok: bool\n\n@app.get(\n    \"/health\",\n    response_model=HealthResponse,\n    summary=\"Health check\",\n)\ndef health():\n    return {\"ok\": True}",
          "challenge_solution": "# FastAPI exposes:\n# /docs\n# /redoc\n# /openapi.json\n#\n# Add response_model, descriptions, tags and examples so the schema is useful to clients.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי OpenAPI & Docs פותר.",
            "עבור על התחביר המרכזי: Swagger, ReDoc, schemas, examples.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-OpenAPI & Docs, תקן אותה והרץ שוב.",
            "code": "# /docs and /openapi.json",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from fastapi import UploadFile, File\n\n@app.post(\"/upload\")\nasync def upload(file: UploadFile = File(...)):\n    content = await file.read()\n    return {\n        \"filename\": file.filename,\n        \"size\": len(content),\n    }",
          "challenge_solution": "# Production considerations:\n# - validate content type\n# - enforce size limits\n# - stream large files\n# - randomize server-side storage names\n# - never trust client filenames\n# - scan untrusted content when required",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי File Uploads פותר.",
            "עבור על התחביר המרכזי: UploadFile, multipart.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-File Uploads, תקן אותה והרץ שוב.",
            "code": "# async def upload(file: UploadFile)",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from fastapi import BackgroundTasks\n\ndef write_audit(message: str):\n    print(message)\n\n@app.post(\"/users\")\ndef create_user(background_tasks: BackgroundTasks):\n    background_tasks.add_task(write_audit, \"user created\")\n    return {\"ok\": True}",
          "challenge_solution": "# BackgroundTasks is fine for small in-process work.\n# For durable/heavy jobs use a queue/worker system, e.g. Celery/RQ/managed queues.\n# The API process can restart; in-process background work is not a durable job queue.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Background tasks פותר.",
            "עבור על התחביר המרכזי: BackgroundTasks and limits.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Background tasks, תקן אותה והרץ שוב.",
            "code": "from fastapi import BackgroundTasks",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from fastapi import WebSocket\n\n@app.websocket(\"/ws\")\nasync def websocket_endpoint(ws: WebSocket):\n    await ws.accept()\n    while True:\n        message = await ws.receive_text()\n        await ws.send_text(f\"echo: {message}\")",
          "challenge_solution": "# Real systems also need:\n# - disconnect handling\n# - authentication\n# - connection registry\n# - broadcast strategy\n# - backpressure\n# - multiple server instances / shared pub-sub",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי WebSockets פותר.",
            "עבור על התחביר המרכזי: persistent connections, realtime basics.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-WebSockets, תקן אותה והרץ שוב.",
            "code": "from fastapi import WebSocket",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import asyncio\n\nasync def task(name):\n    await asyncio.sleep(1)\n    return name\n\nasync def main():\n    results = await asyncio.gather(\n        task(\"a\"),\n        task(\"b\"),\n    )\n    print(results)\n\nasyncio.run(main())",
          "challenge_solution": "import asyncio\nfrom time import perf_counter\n\nasync def wait_one():\n    await asyncio.sleep(1)\n\nasync def main():\n    start = perf_counter()\n    await asyncio.gather(wait_one(), wait_one())\n    print(round(perf_counter() - start, 1))  # ~1.0, not ~2.0\n\nasyncio.run(main())",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי sync vs async פותר.",
            "עבור על התחביר המרכזי: blocking, event loop, cooperative multitasking.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-sync vs async, תקן אותה והרץ שוב.",
            "code": "import asyncio\nasync def main():\n    await asyncio.sleep(1)\nasyncio.run(main())",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import asyncio\n\nasync def fetch(name, delay):\n    await asyncio.sleep(delay)\n    return name\n\nasync def main():\n    a = asyncio.create_task(fetch(\"A\", 0.2))\n    b = asyncio.create_task(fetch(\"B\", 0.1))\n    print(await a, await b)\n\nasyncio.run(main())",
          "challenge_solution": "import asyncio\n\nasync def main():\n    tasks = [asyncio.create_task(asyncio.sleep(10)) for _ in range(2)]\n    for task in tasks:\n        task.cancel()\n\n    results = await asyncio.gather(*tasks, return_exceptions=True)\n    print(results)\n\nasyncio.run(main())",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי asyncio tasks פותר.",
            "עבור על התחביר המרכזי: create_task, gather, cancellation.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-asyncio tasks, תקן אותה והרץ שוב.",
            "code": "results = await asyncio.gather(fetch_a(), fetch_b())",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import asyncio\n\nasync def slow():\n    await asyncio.sleep(2)\n\nasync def main():\n    try:\n        async with asyncio.timeout(0.1):\n            await slow()\n    except TimeoutError:\n        print(\"timed out\")\n\nasyncio.run(main())",
          "challenge_solution": "import asyncio\n\nasync def call_with_timeout(coro, seconds):\n    try:\n        async with asyncio.timeout(seconds):\n            return await coro\n    except TimeoutError:\n        return None",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Timeouts פותר.",
            "עבור על התחביר המרכזי: asyncio.timeout, cancellation safety.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Timeouts, תקן אותה והרץ שוב.",
            "code": "import asyncio\n# async with asyncio.timeout(2): ...",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from concurrent.futures import ThreadPoolExecutor\n\ndef blocking_io(value):\n    return value * 2\n\nwith ThreadPoolExecutor(max_workers=4) as pool:\n    results = list(pool.map(blocking_io, [1, 2, 3]))\n\nprint(results)",
          "challenge_solution": "# Threads are useful mainly when work waits on blocking I/O.\n# They do not automatically accelerate pure Python CPU-bound loops because of the GIL in traditional CPython builds.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Threads פותר.",
            "עבור על התחביר המרכזי: ThreadPoolExecutor, GIL concepts.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Threads, תקן אותה והרץ שוב.",
            "code": "from concurrent.futures import ThreadPoolExecutor",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from concurrent.futures import ProcessPoolExecutor\n\ndef square(number):\n    return number * number\n\nif __name__ == \"__main__\":\n    with ProcessPoolExecutor() as pool:\n        print(list(pool.map(square, [1, 2, 3, 4])))",
          "challenge_solution": "# Processes trade memory/serialization overhead for real parallel CPU work.\n# Use them for sufficiently heavy CPU-bound tasks, not tiny operations.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Processes פותר.",
            "עבור על התחביר המרכזי: ProcessPoolExecutor, CPU-bound work.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Processes, תקן אותה והרץ שוב.",
            "code": "from concurrent.futures import ProcessPoolExecutor",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from time import perf_counter\n\nstart = perf_counter()\ntotal = sum(range(1_000_000))\nelapsed = perf_counter() - start\n\nprint(total)\nprint(elapsed)",
          "challenge_solution": "# CLI:\n# python -m cProfile -s cumulative app.py\n#\n# Optimize only after identifying an actual hot path.\n# Re-measure after each change.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Profiling פותר.",
            "עבור על התחביר המרכזי: timeit, cProfile, hot paths.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Profiling, תקן אותה והרץ שוב.",
            "code": "python -m cProfile app.py",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from functools import lru_cache\n\n@lru_cache(maxsize=128)\ndef fibonacci(n):\n    if n < 2:\n        return n\n    return fibonacci(n-1) + fibonacci(n-2)\n\nprint(fibonacci(30))\nprint(fibonacci.cache_info())",
          "challenge_solution": "# Cache only when staleness and invalidation rules are understood.\n# External API/database results often need TTL-based caches; pure deterministic functions are simpler.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Caching פותר.",
            "עבור על התחביר המרכזי: functools.cache/lru_cache, external cache concepts.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Caching, תקן אותה והרץ שוב.",
            "code": "from functools import lru_cache\n@lru_cache\ndef f(x): return x*x",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Correct conceptual flow:\n# password from user\n# -> password hashing function (Argon2id/bcrypt/scrypt)\n# -> store only hash\n# -> on login verify password against hash\n#\n# Never store plaintext passwords.\n\nprint(\"hash, don't encrypt, login passwords\")",
          "challenge_solution": "# Also consider:\n# - per-password salts (handled by good libraries)\n# - rate limiting\n# - breached-password checks\n# - MFA\n# - secure reset tokens\n# - password hash upgrades over time",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Password security פותר.",
            "עבור על התחביר המרכזי: hashing vs encryption, salts, Argon2/bcrypt concepts.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Password security, תקן אותה והרץ שוב.",
            "code": "# never store plaintext passwords",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# JWT conceptual claims:\npayload = {\n    \"sub\": \"user-7\",\n    \"exp\": 9999999999,\n    \"scope\": [\"read\"],\n}\n\nprint(payload[\"sub\"])\n\n# Signature protects integrity; JWT contents are not automatically secret.",
          "challenge_solution": "# Access token: short-lived.\n# Refresh token: longer-lived, revocable/rotatable.\n# Validate signature, issuer/audience if used, and expiry.\n# Do not blindly trust decoded claims before verification.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי JWT פותר.",
            "עבור על התחביר המרכזי: claims, signature, expiry, refresh concepts.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-JWT, תקן אותה והרץ שוב.",
            "code": "# access token + exp + sub",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Resource server receives:\n# Authorization: Bearer <access-token>\n#\n# It validates the token and required scopes before serving the resource.\n\nrequired_scope = \"users:read\"\ntoken_scopes = {\"users:read\", \"profile\"}\n\nprint(required_scope in token_scopes)",
          "challenge_solution": "# For third-party/user authorization, use the appropriate OAuth flow.\n# OAuth is authorization; OIDC adds an identity layer for authentication.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי OAuth2 concepts פותר.",
            "עבור על התחביר המרכזי: authorization flows, scopes, bearer tokens.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-OAuth2 concepts, תקן אותה והרץ שוב.",
            "code": "# Authorization: Bearer <token>",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def can_delete(user):\n    return user[\"role\"] == \"admin\"\n\nprint(can_delete({\"role\": \"admin\"}))\nprint(can_delete({\"role\": \"viewer\"}))",
          "challenge_solution": "def can_edit(user, document):\n    if user[\"role\"] == \"admin\":\n        return True\n    return document[\"owner_id\"] == user[\"id\"]\n\nprint(can_edit({\"id\": 7, \"role\": \"user\"}, {\"owner_id\": 7}))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי RBAC/ABAC פותר.",
            "עבור על התחביר המרכזי: roles vs attributes, authorization checks.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-RBAC/ABAC, תקן אותה והרץ שוב.",
            "code": "def can_delete(user, resource): ...",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# CORS decides which browser origins may call your API.\n# Configure explicit origins instead of '*' when credentials are involved.\n\nallowed_origins = {\n    \"https://app.example.com\",\n}\n\nprint(\"https://app.example.com\" in allowed_origins)",
          "challenge_solution": "# CSRF is especially relevant when browsers automatically attach auth credentials such as cookies.\n# Bearer tokens explicitly added by JS have a different threat profile.\n# SameSite cookies + CSRF tokens are common defenses.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי CORS & CSRF פותר.",
            "עבור על התחביר המרכזי: origins, credentials, cookie vs bearer risks.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-CORS & CSRF, תקן אותה והרץ שוב.",
            "code": "# configure allowed origins explicitly",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# SQL parameter binding:\nuser_id = 7\nquery = \"SELECT * FROM users WHERE id = ?\"\nparams = (user_id,)\n\nprint(query, params)\n\n# Do not build SQL from untrusted input with string concatenation.",
          "challenge_solution": "# Trust boundaries to validate:\n# 1. HTTP body\n# 2. query/path parameters\n# 3. uploaded files\n# 4. external API responses\n# 5. database data used in sensitive contexts\n# 6. filesystem paths / shell arguments",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Validation & Injection פותר.",
            "עבור על התחביר המרכזי: SQL injection, command injection, path traversal.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Validation & Injection, תקן אותה והרץ שוב.",
            "code": "# use bound parameters",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Example policy:\nlimits = {\n    \"login\": \"5/minute/ip\",\n    \"password_reset\": \"3/hour/account\",\n    \"public_api\": \"100/minute/api-key\",\n}\n\nprint(limits)",
          "challenge_solution": "# Return HTTP 429 when exceeded.\n# In distributed deployments, counters usually need a shared store/gateway.\n# Include abuse prevention without making legitimate retry behavior impossible.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Rate limiting פותר.",
            "עבור על התחביר המרכזי: abuse controls, quotas, backoff.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Rate limiting, תקן אותה והרץ שוב.",
            "code": "# 429 Too Many Requests",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import os\n\nclass Settings:\n    database_url = os.getenv(\"DATABASE_URL\")\n    environment = os.getenv(\"ENVIRONMENT\", \"development\")\n\nsettings = Settings()\nprint(settings.environment)",
          "challenge_solution": "# Production:\n# - secret manager or protected environment variables\n# - rotation\n# - least privilege\n# - no secrets in Git\n# - separate dev/staging/prod credentials",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Secrets & config פותר.",
            "עבור על התחביר המרכזי: env vars, secret managers, rotation.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Secrets & config, תקן אותה והרץ שוב.",
            "code": "DATABASE_URL = os.getenv('DATABASE_URL')",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# HTTP router\ndef create_user_endpoint(payload, service):\n    return service.create(payload)\n\n# service\nclass UserService:\n    def __init__(self, repo):\n        self.repo = repo\n\n    def create(self, payload):\n        # business rules\n        return self.repo.save(payload)",
          "challenge_solution": "# Dependency direction:\n# router -> service -> repository interface\n#                       ^\n#                 concrete DB adapter\n#\n# Business logic should not depend directly on FastAPI or SQLAlchemy details.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Layered architecture פותר.",
            "עבור על התחביר המרכזי: API/service/repository/domain boundaries.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Layered architecture, תקן אותה והרץ שוב.",
            "code": "router -> service -> repository -> database",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Core idea:\n# domain/application define rules and interfaces.\n# adapters implement HTTP, DB, messaging.\n#\n# dependency arrows point inward.\n\nprint(\"frameworks are implementation details around the core\")",
          "challenge_solution": "# Example port:\nclass PaymentPort:\n    def charge(self, amount):\n        raise NotImplementedError\n\n# Adapter may use Stripe/another provider,\n# while application service depends only on PaymentPort.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Clean Architecture פותר.",
            "עבור על התחביר המרכזי: dependency rule, ports/adapters concepts.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Clean Architecture, תקן אותה והרץ שוב.",
            "code": "domain <- application <- adapters",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class UserRepository:\n    def get(self, user_id):\n        raise NotImplementedError\n\nclass MemoryUserRepository(UserRepository):\n    def __init__(self):\n        self.users = {1: {\"id\": 1, \"name\": \"Dana\"}}\n\n    def get(self, user_id):\n        return self.users.get(user_id)\n\nprint(MemoryUserRepository().get(1))",
          "challenge_solution": "# Benefit: service tests can use a fake repository.\n# Cost: extra abstraction. Do not add it mechanically when it provides no value.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Repository pattern פותר.",
            "עבור על התחביר המרכזי: persistence abstraction, tradeoffs.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Repository pattern, תקן אותה והרץ שוב.",
            "code": "class UserRepository(Protocol): ...",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class UserService:\n    def __init__(self, repo):\n        self.repo = repo\n\n    def rename(self, user_id, new_name):\n        if not new_name.strip():\n            raise ValueError(\"name required\")\n        user = self.repo.get(user_id)\n        user[\"name\"] = new_name.strip()\n        return self.repo.save(user)",
          "challenge_solution": "# Router should mainly:\n# 1. parse/validate HTTP input\n# 2. call service\n# 3. translate result/errors to HTTP response\n#\n# Business rules belong below the transport layer.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Service layer פותר.",
            "עבור על התחביר המרכזי: business logic orchestration.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Service layer, תקן אותה והרץ שוב.",
            "code": "class UserService:\n    def __init__(self, repo): self.repo=repo",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "FROM python:3.14-slim\n\nWORKDIR /app\nCOPY pyproject.toml .\nCOPY app ./app\n\nRUN pip install --no-cache-dir .\n\nCMD [\"uvicorn\", \"app.main:app\", \"--host\", \"0.0.0.0\", \"--port\", \"8000\"]",
          "challenge_solution": "# Production improvements:\n# - pin dependencies\n# - non-root user\n# - small build context via .dockerignore\n# - health checks at orchestration layer\n# - deterministic builds\n# - no secrets baked into image",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Docker basics פותר.",
            "עבור על התחביר המרכזי: images, containers, Dockerfile, layers.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Docker basics, תקן אותה והרץ שוב.",
            "code": "FROM python:3.14-slim\nWORKDIR /app\nCOPY . .",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "services:\n  api:\n    build: .\n    ports:\n      - \"8000:8000\"\n    environment:\n      DATABASE_URL: postgresql://app:app@db/app\n    depends_on:\n      - db\n\n  db:\n    image: postgres:17\n    environment:\n      POSTGRES_USER: app\n      POSTGRES_PASSWORD: app\n      POSTGRES_DB: app",
          "challenge_solution": "# Compose is excellent for local integration environments.\n# Production orchestration may use ECS/Kubernetes/another managed platform instead.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Docker Compose פותר.",
            "עבור על התחביר המרכזי: API + DB + cache concepts.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Docker Compose, תקן אותה והרץ שוב.",
            "code": "services:\n  api:\n    build: .\n  db:\n    image: postgres",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "name: CI\n\non:\n  push:\n  pull_request:\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \"3.14\"\n      - run: pip install -e \".[dev]\"\n      - run: ruff check .\n      - run: pytest -q",
          "challenge_solution": "# Add:\n# - dependency caching when useful\n# - coverage threshold\n# - build image only after tests pass\n# - protected deployment environments\n# - migrations/deploy as separate controlled jobs",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי GitHub Actions פותר.",
            "עבור על התחביר המרכזי: workflow, test/lint/build gates.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-GitHub Actions, תקן אותה והרץ שוב.",
            "code": "name: CI\non: [push, pull_request]",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Minimum signals:\nsignals = {\n    \"logs\": [\"request_id\", \"level\", \"route\", \"error\"],\n    \"metrics\": [\"request_count\", \"latency\", \"error_rate\"],\n    \"health\": [\"/health\", \"/ready\"],\n}\n\nprint(signals)",
          "challenge_solution": "# Traces help follow one request across services.\n# Avoid logging secrets/passwords/tokens/PII unnecessarily.\n# Alerts should be tied to user-impacting symptoms, not every noisy metric.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Observability פותר.",
            "עבור על התחביר המרכזי: logs, metrics, traces, health/readiness.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Observability, תקן אותה והרץ שוב.",
            "code": "# structured logs + request_id",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Safe sequence:\nsteps = [\n    \"build\",\n    \"test\",\n    \"scan/check\",\n    \"deploy compatible code\",\n    \"run migrations safely\",\n    \"health/readiness verify\",\n    \"monitor\",\n]\n\nprint(\" -> \".join(steps))",
          "challenge_solution": "# Rollback plan must account for DB compatibility.\n# Prefer backward-compatible migrations and feature flags for risky changes.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Deployment פותר.",
            "עבור על התחביר המרכזי: workers, reverse proxy, HTTPS, envs, migrations.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Deployment, תקן אותה והרץ שוב.",
            "code": "# build -> test -> migrate -> deploy",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class Money:\n    def __init__(self, amount):\n        self.amount = amount\n\n    def __repr__(self):\n        return f\"Money({self.amount})\"\n\n    def __eq__(self, other):\n        if not isinstance(other, Money):\n            return NotImplemented\n        return self.amount == other.amount\n\nprint(Money(10))",
          "challenge_solution": "class Collection:\n    def __init__(self, values):\n        self.values = list(values)\n\n    def __len__(self):\n        return len(self.values)\n\n    def __iter__(self):\n        return iter(self.values)\n\nprint(list(Collection([1, 2, 3])))",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Python data model פותר.",
            "עבור על התחביר המרכזי: dunder methods, protocols, repr/eq/hash.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Python data model, תקן אותה והרץ שוב.",
            "code": "class Money:\n    def __repr__(self): return 'Money(...)'",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class Positive:\n    def __set_name__(self, owner, name):\n        self.name = \"_\" + name\n\n    def __get__(self, obj, owner):\n        if obj is None:\n            return self\n        return getattr(obj, self.name)\n\n    def __set__(self, obj, value):\n        if value <= 0:\n            raise ValueError(\"must be positive\")\n        setattr(obj, self.name, value)\n\nclass Product:\n    price = Positive()\n\n    def __init__(self, price):\n        self.price = price\n\nprint(Product(10).price)",
          "challenge_solution": "# property itself is implemented using the descriptor protocol.\n# Prefer property/dataclasses/validation libraries before custom descriptors unless reusable attribute behavior is truly needed.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Descriptors פותר.",
            "עבור על התחביר המרכזי: __get__/__set__, attribute access.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Descriptors, תקן אותה והרץ שוב.",
            "code": "class Positive:\n    def __set__(self,obj,value):\n        if value<0: raise ValueError",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "def multiplier(factor):\n    def apply(value):\n        return value * factor\n    return apply\n\ndouble = multiplier(2)\nprint(double(5))",
          "challenge_solution": "def make_counter():\n    count = 0\n\n    def next_value():\n        nonlocal count\n        count += 1\n        return count\n\n    return next_value\n\ncounter = make_counter()\nprint(counter(), counter())",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Closures פותר.",
            "עבור על התחביר המרכזי: free variables, nonlocal, function factories.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Closures, תקן אותה והרץ שוב.",
            "code": "def multiplier(k):\n    return lambda x: x*k",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import copy\n\noriginal = [[1], [2]]\nshallow = original.copy()\ndeep = copy.deepcopy(original)\n\noriginal[0].append(99)\n\nprint(shallow)  # nested list shared\nprint(deep)     # independent nested list",
          "challenge_solution": "def append_bad(value, target=[]):\n    target.append(value)\n    return target\n\nprint(append_bad(1))\nprint(append_bad(2))  # same default list reused\n\ndef append_good(value, target=None):\n    if target is None:\n        target = []\n    target.append(value)\n    return target",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Memory model פותר.",
            "עבור על התחביר המרכזי: references, mutability, shallow/deep copy.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Memory model, תקן אותה והרץ שוב.",
            "code": "import copy",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Traditional CPython:\n# one thread executes Python bytecode under the GIL at a time.\n# Threads can still help I/O-bound workloads.\n#\n# Free-threaded CPython builds change parts of this model,\n# so profile the exact runtime/build you deploy.\n\nprint(\"choose concurrency from workload + runtime\")",
          "challenge_solution": "# CPU-bound pure Python:\n# compare sequential vs process pool.\n# I/O-bound blocking calls:\n# compare threads.\n# async-compatible I/O:\n# compare asyncio.\n# Always benchmark the real workload.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי GIL & free-threading concepts פותר.",
            "עבור על התחביר המרכזי: CPython execution model, concurrency implications.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-GIL & free-threading concepts, תקן אותה והרץ שוב.",
            "code": "# implementation details matter for performance",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import inspect\n\ndef add(a: int, b: int = 0) -> int:\n    return a + b\n\nprint(inspect.signature(add))\nprint(add.__annotations__)",
          "challenge_solution": "plugins = {}\n\ndef register(name):\n    def decorator(fn):\n        plugins[name] = fn\n        return fn\n    return decorator\n\n@register(\"hello\")\ndef hello():\n    return \"hi\"\n\nprint(plugins[\"hello\"]())",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Introspection פותר.",
            "עבור על התחביר המרכזי: inspect, getattr/setattr, vars, callable.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Introspection, תקן אותה והרץ שוב.",
            "code": "import inspect\nprint(inspect.signature(len))",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "class RegistryMeta(type):\n    registry = []\n\n    def __new__(mcls, name, bases, namespace):\n        cls = super().__new__(mcls, name, bases, namespace)\n        mcls.registry.append(cls)\n        return cls\n\nclass Base(metaclass=RegistryMeta):\n    pass\n\nclass Child(Base):\n    pass\n\nprint([c.__name__ for c in RegistryMeta.registry])",
          "challenge_solution": "# Often simpler:\nregistry = []\n\ndef register(cls):\n    registry.append(cls)\n    return cls\n\n@register\nclass Service:\n    pass\n\nprint(registry)\n\n# Prefer the simplest mechanism that expresses the requirement.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Metaclasses פותר.",
            "עבור על התחביר המרכזי: class creation hooks, when not to use them.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Metaclasses, תקן אותה והרץ שוב.",
            "code": "class Meta(type):\n    pass",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "from timeit import timeit\n\nloop = timeit(\"sum([x*x for x in range(1000)])\", number=1000)\ngen = timeit(\"sum(x*x for x in range(1000))\", number=1000)\n\nprint(loop, gen)",
          "challenge_solution": "# Performance workflow:\n# 1. define metric\n# 2. reproduce workload\n# 3. profile\n# 4. optimize hot path\n# 5. verify correctness\n# 6. benchmark again\n# 7. monitor in production",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Performance engineering פותר.",
            "עבור על התחביר המרכזי: complexity, allocation, vectorization concepts.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Performance engineering, תקן אותה והרץ שוב.",
            "code": "sum(range(1_000_000))",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Suggested architecture:\n# taskapp/\n#   cli.py\n#   models.py\n#   repository.py\n#   service.py\n# tests/\n#\n# Commands:\n# task add \"Learn Python\"\n# task list\n# task done 1\n# task delete 1",
          "challenge_solution": "# Definition of done:\n# - persistent storage (JSON/SQLite)\n# - validation\n# - pytest tests\n# - pyproject.toml\n# - clear CLI errors\n# - README with installation/examples",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי CLI Task Manager פותר.",
            "עבור על התחביר המרכזי: CLI, files/DB, validation, tests, packaging.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-CLI Task Manager, תקן אותה והרץ שוב.",
            "code": "# deliverable: installable CLI",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Endpoints:\n# POST   /tasks\n# GET    /tasks\n# GET    /tasks/{id}\n# PATCH  /tasks/{id}\n# DELETE /tasks/{id}\n#\n# Stack:\n# FastAPI + Pydantic + SQLAlchemy + Alembic + PostgreSQL + pytest",
          "challenge_solution": "# Add:\n# - pagination/filtering\n# - response models\n# - integration tests\n# - 404/409 handling\n# - created_at/updated_at\n# - Docker compose for local DB",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי REST Task API פותר.",
            "עבור על התחביר המרכזי: FastAPI, Pydantic, SQLAlchemy, migrations, tests.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-REST Task API, תקן אותה והרץ שוב.",
            "code": "# deliverable: documented REST API",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Endpoints:\n# POST /auth/register\n# POST /auth/login\n# POST /auth/refresh\n# GET  /auth/me\n#\n# Store password hashes only.\n# Use short-lived access token + controlled refresh strategy.",
          "challenge_solution": "# Add:\n# - unique email\n# - password policy\n# - login rate limit\n# - RBAC\n# - token expiry tests\n# - invalid/revoked refresh handling\n# - audit logs without secrets",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Auth Service פותר.",
            "עבור על התחביר המרכזי: JWT/OAuth2 concepts, RBAC, rate limiting.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Auth Service, תקן אותה והרץ שוב.",
            "code": "# deliverable: auth module",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "import asyncio\n\nasync def aggregate(fetchers):\n    results = await asyncio.gather(\n        *(fetcher() for fetcher in fetchers),\n        return_exceptions=True,\n    )\n    return results",
          "challenge_solution": "# Production requirements:\n# - per-provider timeout\n# - retries with bounded backoff where safe\n# - concurrency limits\n# - caching\n# - partial failure policy\n# - metrics per provider",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Async Aggregator פותר.",
            "עבור על התחביר המרכזי: async HTTP, timeouts, retries, caching.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Async Aggregator, תקן אותה והרץ שוב.",
            "code": "# deliverable: concurrent aggregator",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Checklist:\n# FastAPI\n# PostgreSQL\n# migrations\n# pytest\n# structured logging\n# /health + /ready\n# Docker\n# CI\n# env-based config\n# authentication/authorization where required",
          "challenge_solution": "# Deployment quality gate:\n# - tests pass\n# - lint/type checks pass\n# - image builds\n# - migrations reviewed\n# - secrets configured\n# - rollback plan exists\n# - dashboards/alerts ready",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Production API פותר.",
            "עבור על התחביר המרכזי: Docker, CI, config, logging, health, deployment.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Production API, תקן אותה והרץ שוב.",
            "code": "# deliverable: deployable service",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Portfolio should demonstrate:\n# unit tests\n# integration tests\n# API tests\n# DB tests\n# fixtures/factories\n# mocks only at real boundaries\n# parametrization\n# coverage report\n# CI quality gate",
          "challenge_solution": "# Explain WHY each test level exists.\n# A portfolio with 100% meaningless coverage is weaker than a smaller suite that protects critical behavior.",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Testing Portfolio פותר.",
            "עבור על התחביר המרכזי: unit/integration/e2e strategy, factories, mocks, coverage.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Testing Portfolio, תקן אותה והרץ שוב.",
            "code": "# deliverable: serious test suite",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
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
          },
          "exercise_solution": "# Suggested product:\n# users + projects + subscriptions/tasks\n#\n# layers:\n# api/\n# application/\n# domain/\n# infrastructure/\n#\n# include DB, auth, background jobs, tests, docs and CI.",
          "challenge_solution": "# Final acceptance criteria:\n# 1. clear architecture boundaries\n# 2. documented API\n# 3. PostgreSQL + migrations\n# 4. auth + authorization\n# 5. automated tests\n# 6. Docker\n# 7. CI/CD\n# 8. observability\n# 9. failure handling\n# 10. production/rollback plan",
          "walkthrough": [
            "זהה קודם את הבעיה שהכלי Final Architecture Project פותר.",
            "עבור על התחביר המרכזי: clean boundaries, DB, auth, background work, tests, docs.",
            "הרץ את הדוגמה כפי שהיא ורשום לעצמך מה אתה מצפה לראות לפני הלחיצה על Run.",
            "שנה ערך אחד או תנאי אחד ונסה לנבא את הפלט מחדש.",
            "בצע את תרגיל ההשלמה בלי לפתוח פתרון.",
            "עבור לתרגיל העצמאי ול-Challenge ורק לאחר ניסיון אמיתי השווה לפתרון."
          ],
          "mastery": [
            "אני מסוגל להסביר את הנושא ללא העתקה.",
            "אני מסוגל לכתוב דוגמה חדשה מאפס.",
            "אני יודע לזהות לפחות טעות נפוצה אחת.",
            "אני מסוגל לפתור את תרגיל ההשלמה.",
            "אני מסוגל להבין את פתרון ה-Challenge ולהסביר כל שורה."
          ],
          "bug_hunt": {
            "prompt": "מצא בעיה אפשרית בקוד הבא הקשור ל-Final Architecture Project, תקן אותה והרץ שוב.",
            "code": "# deliverable: portfolio-grade backend",
            "hint": "נסה לשנות טיפוס, ערך גבול, None/ריק, או תנאי ולבדוק האם ההתנהגות עדיין נכונה."
          }
        }
      ]
    }
  ]
};
