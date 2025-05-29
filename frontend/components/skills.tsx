import { Card, CardContent } from "@/components/ui/card";

export default function Skills() {
  const skillCategories = [
    {
      category: "フロントエンド",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "HTML/CSS",
        "Tailwind CSS",
      ],
    },
    {
      category: "バックエンド",
      skills: [
        "Node.js",
        "Ruby on Rails",
        "Express",
        "GraphQL",
        "REST API設計",
      ],
    },
    {
      category: "データベース",
      skills: ["PostgreSQL", "MongoDB", "Redis", "SQL", "ORM"],
    },
    {
      category: "インフラ/DevOps",
      skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub Actions", "Terraform"],
    },
    {
      category: "その他",
      skills: [
        "GAS (Google Apps Script)",
        "アジャイル開発",
        "テスト駆動開発",
        "システム設計",
      ],
    },
  ];

  return (
    <section className="py-16" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">スキル一覧</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  {category.category}
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
