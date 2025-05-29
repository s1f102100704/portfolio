import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "タスク管理アプリ",
      description:
        "Reactとバックエンドにはフルスタックフレームワークを使用したタスク管理アプリケーション。ドラッグ＆ドロップ機能、フィルタリング、ソート機能を実装。",
      techStack: ["TypeScript", "React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/username/task-manager",
    },
    {
      title: "天気予報ダッシュボード",
      description:
        "複数の都市の天気予報を表示するダッシュボード。OpenWeatherMap APIを使用し、グラフ表示機能も実装。",
      techStack: ["React", "Redux", "Chart.js", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/username/weather-dashboard",
    },
    {
      title: "ECサイトバックエンド",
      description:
        "ECサイトのバックエンドシステム。商品管理、ユーザー認証、注文処理などの機能を実装。",
      techStack: ["Ruby on Rails", "PostgreSQL", "AWS", "Docker", "Redis"],
      githubUrl: "https://github.com/username/ecommerce-backend",
    },
  ];

  return (
    <section className="py-16" id="projects">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">実績紹介</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github size={18} />
                    <span>GitHubで見る</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
