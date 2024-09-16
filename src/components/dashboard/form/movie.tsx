"use client";

// import { useParams, useRouter } from "next/navigation";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
import { z } from "zod";

import { MovieSchema } from "@/types/movie";

type Movie = z.infer<typeof MovieSchema>;

interface Props {
  initialData?: Movie;
}

export default function MovieForm({  }: Props) {
  // const params = useParams();
  // const router = useRouter();
  // // const [open, setOpen] = useState(false);
  // // const [loading, setLoading] = useState(false);
  // // const title = initialData ? 'Edit movies' : 'Create movies';
  // // const description = initialData ? 'Edit a movies.' : 'Add a new movies';
  // // const toastMessage = initialData ? 'movies updated.' : 'movies created.';
  // // const action = initialData ? 'Save changes' : 'Create';

  // const form = useForm<Movie>({
  //   resolver: zodResolver(MovieSchema),
  //   defaultValues: initialData,
  // });

  // const onSubmit = (data: Movie) => {
  //   console.log(data);
  // };

  return (
    // <section className="flex flex-col items-center container my-2">
    //   <div className="flex items-center justify-between">
    //     <div className="flex flex-col items-center gap-2">
    //       <h1 className="text-lg text-foreground">{title}</h1>
    //       <p className="text-xs text-muted-foreground">
    //       {description}
    //       </p>
    //     </div>
    //     {initialData && (
    //       <Button
    //         disabled={loading}
    //         variant="destructive"
    //         size="sm"
    //         onClick={() => setOpen(true)}
    //       >
    //         <Trash className="h-4 w-4" />
    //       </Button>
    //     )}
    //   </div>
    //   <Separator />

    //   <Form {...form}>
    //     <form
    //       onSubmit={form.handleSubmit(onSubmit)}
    //       className="w-full space-y-8"
    //     >
    //       <FormField
    //         control={form.control}
    //         name="imgUrl"
    //         render={({ field }) => (
    //           <FormItem>
    //             <FormLabel>Images</FormLabel>
    //             <FormControl>
    //               <FileUpload
    //                 onChange={field.onChange}
    //                 value={field.value}
    //                 onRemove={field.onChange}
    //               />
    //             </FormControl>
    //             <FormMessage />
    //           </FormItem>
    //         )}
    //       />

    //       <div className="gap-8 md:grid md:grid-cols-3">
    //         <FormField
    //           control={form.control}
    //           name="title"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>title</FormLabel>
    //               <FormControl>
    //                 <Input
    //                   disabled={loading}
    //                   placeholder="title"
    //                   {...field}
    //                 />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />

    //         {/* <FormField
    //           control={form.control}
    //           name="description"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>Description</FormLabel>
    //               <FormControl>
    //                 <Input
    //                   disabled={loading}
    //                   placeholder="Product description"
    //                   {...field}
    //                 />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //         <FormField
    //           control={form.control}
    //           name="price"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>Price</FormLabel>
    //               <FormControl>
    //                 <Input type="number" disabled={loading} {...field} />
    //               </FormControl>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         />
    //         <FormField
    //           control={form.control}
    //           name="category"
    //           render={({ field }) => (
    //             <FormItem>
    //               <FormLabel>Category</FormLabel>
    //               <Select
    //                 disabled={loading}
    //                 onValueChange={field.onChange}
    //                 value={field.value}
    //                 defaultValue={field.value}
    //               >
    //                 <FormControl>
    //                   <SelectTrigger>
    //                     <SelectValue
    //                       defaultValue={field.value}
    //                       placeholder="Select a category"
    //                     />
    //                   </SelectTrigger>
    //                 </FormControl>
    //                 <SelectContent>
    //                   {categories.map((category) => (
    //                     <SelectItem key={category._id} value={category._id}>
    //                       {category.name}
    //                     </SelectItem>
    //                   ))}
    //                 </SelectContent>
    //               </Select>
    //               <FormMessage />
    //             </FormItem>
    //           )}
    //         /> */}
    //       </div>
    //       <Button disabled={loading} className="ml-auto" type="submit">
    //         {action}
    //       </Button>
    //     </form>
    //   </Form>
    // </section>
    <h1>hello</h1>
  );
}
