export default class ScriptInjectionService {
  private constructor() {}

  public static readonly instance = new ScriptInjectionService();

  private scriptList: { id: number; script: HTMLScriptElement }[] = [];

  private remove = (id: number) => {
    this.scriptList = this.scriptList.filter((script) => script.id !== id);
  };

  public load = (scriptPath: string) => {
    const script = document.createElement("script");
    const id = new Date().getTime();
    script.src = chrome.extension.getURL(scriptPath);
    // script.onload = () => {
    //   this.remove(id);
    // };
    this.scriptList.push({ id, script });
    (document.head || document.documentElement).appendChild(script);
  };
}
