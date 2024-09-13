import { Code } from "@/components/ui/code";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import type { BundledLanguage } from "shiki";

const codeTabs = [
  {
    filename: "use-zod-form.ts",
    path: "packages/ui/hooks/use-zod-form.ts",
    lang: "typescript" as BundledLanguage,
    code: `export function useZodForm<Schema extends z.ZodType>(
  props: Omit<UseFormProps<Schema["_input"]>, "resolver"> & {
    schema: Schema;
  },
) {
  const form = useHookForm<Schema["_input"]>({
    ...props,
    resolver: async (data, context, options) => {
      return zodResolver(props.schema)(data, context, options);
    },
  });

  return form;
}`,
  },
  {
    filename: "preview-user.tsx",
    path: "apps/dashboard/components/preview-user.tsx",
    lang: "tsx" as BundledLanguage,
    code: `export function CreateWishForm({ wishlists }: { wishlists: Wishlists[] }) {
  const formRef = useRef<HTMLFormElement>(null);
  async function handleSubmit(formData: FormData) {
    const data = await createWish(formData);
    if (data) {
      formRef.current?.reset();
      toast.success("Dit ønske er blevet oprettet");
    } else {
      toast.error(
        "Der opstod en fejl ved oprettelse af ønskeliste. Prøv igen.",
      );
    }
  }

  return (
    <form ref={formRef} action={handleSubmit} className="flex flex-col gap-4">
      <div>
        <Label htmlFor="product_url">Link til produkt</Label>
        <Input
          required
          type="url"
          id="product_url"
          name="product_url"
          placeholder="Indsæt webshop link her"
        />
      </div>
      <div>
        <Label>Vælg ønskeliste</Label>
        <Select name="wishlist_id" required>
          <SelectTrigger>
            <SelectValue placeholder="Vælg en ønskeliste" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Dine ønskelister</SelectLabel>
              {wishlists.map((wishlist) => (
                <SelectItem key={"select-" + wishlist.id} value={wishlist.id}>
                  {wishlist.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <SubmitButton title="Opret ønske" />
    </form>
  );
}`,
  },
];

function CodeEditor() {
  return (
    <Tabs
      defaultValue={codeTabs[0].filename}
      className="w-full md:w-[650px] rounded-md bg-slate-950"
    >
      <div className="flex">
        <TabsList className="h-auto bg-transparent p-0">
          {codeTabs.map((tab) => (
            <TabsTrigger
              key={tab.filename}
              className="rounded-t-md data-[state=active]:bg-slate-800 data-[state=active]:text-white"
              value={tab.filename}
            >
              {tab.filename}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <ScrollArea className="max-h-80 overflow-y-scroll">
        {codeTabs.map((tab) => (
          <TabsContent key={tab.path} className="mt-0" value={tab.filename}>
            <div className="bg-slate-800 p-2 text-base font-semibold text-white">
              {tab.path}
            </div>
            <Code lang={tab.lang} code={tab.code} />
          </TabsContent>
        ))}
      </ScrollArea>
    </Tabs>
  );
}

export { CodeEditor };
