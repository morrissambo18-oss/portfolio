import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import staticProjects from "../lib/projects";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding projects…");
  for (const [i, p] of staticProjects.entries()) {
    await db.project.upsert({
      where: { slug: p.slug },
      update: {},
      create: {
        slug: p.slug,
        title: p.title,
        category: p.category,
        tags: p.tags,
        impact: p.impact,
        overview: p.overview,
        problem: p.problem,
        solution: p.solution,
        features: p.features,
        techStack: p.techStack,
        challenges: p.challenges,
        learnings: p.learnings,
        githubUrl: p.githubUrl,
        demoUrl: p.demoUrl ?? undefined,
        image: p.image ?? undefined,
        published: true,
        order: i,
      },
    });
    console.log(`  ✓ ${p.title}`);
  }
  console.log("Done.");
}

main().catch(console.error).finally(() => db.$disconnect());
