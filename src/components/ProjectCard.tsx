
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Heart, Share2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Project {
  id: number;
  title: string;
  description: string;
  author: string;
  thumbnail: string;
  category: 'eletronics' | '3d' | 'controls';
  downloads: number;
  likes: number;
  fileUrl?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { toast } = useToast();
  
  const handleDownload = () => {
    if (!project.fileUrl) {
      toast({
        title: "Erro ao baixar",
        description: "Este projeto não possui arquivo para download.",
        variant: "destructive"
      });
      return;
    }
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = project.fileUrl;
    link.download = `${project.title.replace(/\s+/g, '-').toLowerCase()}.${getFileExtension(project.fileUrl)}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Update project downloads count in localStorage
    const savedProjects = localStorage.getItem('workshopProjects');
    if (savedProjects) {
      const projects = JSON.parse(savedProjects);
      const updatedProjects = projects.map((p: Project) => {
        if (p.id === project.id) {
          return { ...p, downloads: p.downloads + 1 };
        }
        return p;
      });
      localStorage.setItem('workshopProjects', JSON.stringify(updatedProjects));
    }
    
    toast({
      title: "Download iniciado",
      description: `${project.title} está sendo baixado.`,
    });
  };
  
  const handleLike = () => {
    // Update project likes count in localStorage
    const savedProjects = localStorage.getItem('workshopProjects');
    if (savedProjects) {
      const projects = JSON.parse(savedProjects);
      const updatedProjects = projects.map((p: Project) => {
        if (p.id === project.id) {
          return { ...p, likes: p.likes + 1 };
        }
        return p;
      });
      localStorage.setItem('workshopProjects', JSON.stringify(updatedProjects));
    }
    
    toast({
      title: "Projeto curtido",
      description: `Você adicionou ${project.title} aos seus favoritos.`,
    });
  };
  
  const handleShare = () => {
    // In a real app, this would open a share dialog or copy a link to clipboard
    navigator.clipboard.writeText(`https://example.com/workshop/project/${project.id}`);
    toast({
      title: "Link copiado",
      description: "Link do projeto copiado para a área de transferência.",
    });
  };
  
  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'eletronics': return 'Eletrônica';
      case '3d': return 'Modelagem 3D';
      case 'controls': return 'Controles & Baterias';
      default: return category;
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'eletronics': return 'bg-blue-100 text-blue-800';
      case '3d': return 'bg-green-100 text-green-800';
      case 'controls': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  // Helper function to extract file extension
  const getFileExtension = (url: string) => {
    if (url.includes('.')) {
      return url.split('.').pop() || 'file';
    }
    return 'file';
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="h-48 bg-gray-200 rounded overflow-hidden mb-4">
          <img 
            src={project.thumbnail} 
            alt={project.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg line-clamp-1">{project.title}</CardTitle>
            <p className="text-sm text-gray-500">por {project.author}</p>
          </div>
          <span className={`inline-block ${getCategoryColor(project.category)} rounded-full px-3 py-1 text-xs font-semibold`}>
            {getCategoryLabel(project.category)}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>{project.downloads}</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4" />
            <span>{project.likes}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <div className="flex gap-2 w-full">
          <Button 
            className="flex-1 bg-robot-blue hover:bg-blue-800"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button 
            variant="outline"
            className="px-3"
            onClick={handleLike}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button 
            variant="outline"
            className="px-3"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
