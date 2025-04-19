export const renderMarkdown = (text) => {
    // Simple markdown parsing (for a full solution, you would use a library)
    let html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .split('\n').join('<br/>');
      
    return { __html: html };
  };
  