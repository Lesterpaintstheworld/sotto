const NotFoundContent = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-[#1A2A40]">Ressource non trouvée</h1>
      <p className="mb-4 text-[#505A64]">
        Désolé, la ressource que vous recherchez n'est pas disponible.
      </p>
      <p className="text-[#505A64]">
        Veuillez vérifier l'URL ou revenir à la page des ressources.
      </p>
    </div>
  );
};

export default NotFoundContent;
